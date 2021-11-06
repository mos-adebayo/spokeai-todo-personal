import React, { ChangeEvent, useState } from "react";
import { Form, InputGroup, FormControl, Offcanvas } from "react-bootstrap";
import { AddButton, AddButtonWrapper, FormWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducers";
import {
  createTaskRequest,
  createTaskStarted
} from "../../redux/actions/taskActions";

const CreateToDo: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, isCreating } = useSelector(
    (state: RootState) => state.task
  );

  const [title, setTitle] = useState("");
  const [items, setItems] = useState<ActionItemPayloadType[]>([
    {
      isDone: false,
      description: "",
      isDirty: false
    }
  ]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>,
    item: ActionItemPayloadType,
    index: number
  ) => {
    const newItems = [...items];
    const value =
      e.target.name === "isDone" ? e.target.checked : e.target.value;
    newItems[index] = {
      ...items[index],
      [e.target.name]: value,
      isDirty: true
    };

    if (!item.isDirty) {
      newItems.push({
        isDone: false,
        description: "",
        isDirty: false
      });
    }

    setItems(newItems);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const resetForm = () => {
    handleStartCreation(false);
    setTitle("");
    setItems([
      {
        isDone: false,
        description: "",
        isDirty: false
      }
    ]);
  };

  const handleStartCreation = (status: boolean) => {
    dispatch(createTaskStarted(status));
  };
  const handleSubmit = () => {
    const actualItems = items
      .filter(({ description }) => description)
      .map(({ description, isDone }) => ({ isDone, description }));
    const payload = {
      id: new Date().getTime(),
      title: title,
      items: actualItems
    };
    dispatch(createTaskRequest(payload));
    resetForm();
  };

  const handleClose = () => {
    resetForm();
    dispatch(createTaskStarted(false));
  };

  return (
    <React.Fragment>
      <Offcanvas show={isCreating} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Todo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormWrapper>
            <InputGroup className="mb-2">
              <Form.Control
                value={title}
                type="text"
                placeholder={"Title"}
                onChange={handleTitleChange}
              />
              <AddButton disabled={!title || loading} onClick={handleSubmit}>
                Save
              </AddButton>
            </InputGroup>

            {items.map((item, index) => (
              <InputGroup className="mb-1" key={index}>
                <InputGroup.Checkbox
                  checked={item.isDone}
                  name="isDone"
                  onChange={(e: any) => handleChange(e, item, index)}
                />
                <FormControl
                  value={item.description}
                  name="description"
                  placeholder="Task item"
                  onChange={(e) => handleChange(e, item, index)}
                />
              </InputGroup>
            ))}
          </FormWrapper>
        </Offcanvas.Body>
      </Offcanvas>

      <AddButtonWrapper onClick={() => handleStartCreation(true)}>
        +
      </AddButtonWrapper>
    </React.Fragment>
  );
};

export default CreateToDo;
