import React, { ChangeEvent, useState, useEffect } from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Toast,
  ToastContainer
} from "react-bootstrap";
import { AddButton, FormWrapper, ItemsWrapper, ItemWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducers";
import {
  createTaskRequest,
  createTaskStarted,
  updateTaskRequest
} from "../../redux/actions/taskActions";
import { CheckBox } from "../TodoItem/styles";

type Prop = {
  task?: TaskItemType;
};
const TaskForm: React.FC<Prop> = ({ task }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.task);

  const [visibleToast, setVisibleToast] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<ActionItemPayloadType[]>([
    {
      isDone: false,
      description: "",
      isDirty: false
    }
  ]);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      const taskItems = task.items.map(({ description, isDone }) => ({
        isDone,
        description,
        isDirty: false
      }));

      const actionItems = [
        ...taskItems,
        {
          isDone: false,
          description: "",
          isDirty: false
        }
      ];

      setItems(actionItems);
    }
  }, [task]);

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

    if (!item.isDirty && value) {
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

  const handleCheckItem = (item: ActionItemPayloadType, index: number) => {
    if (!item.description) return;

    const newItems = [...items];
    const currentItem = items[index];
    newItems[index] = {
      ...currentItem,
      isDone: !currentItem.isDone,
      isDirty: true
    };

    setItems(newItems);
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
      id: task ? task.id : new Date().getTime().toString(),
      title: title,
      items: actualItems
    };

    if (task) {
      dispatch(updateTaskRequest(payload));
      setVisibleToast(true);
    } else {
      dispatch(createTaskRequest(payload));
      resetForm();
    }
  };

  return (
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

      <ItemsWrapper editMode={Boolean(task)}>
        {items.map((item, index) => (
          <ItemWrapper key={index}>
            <InputGroup className="mb-1" key={index}>
              <CheckBox
                checked={item.isDone}
                onClick={() => handleCheckItem(item, index)}
              />
              <FormControl
                value={item.description}
                name="description"
                placeholder="Type new task item"
                onChange={(e) => handleChange(e, item, index)}
              />
            </InputGroup>
          </ItemWrapper>
        ))}
      </ItemsWrapper>

      <ToastContainer className="p-3" position="top-end">
        <Toast
          show={visibleToast}
          onClose={() => setVisibleToast(false)}
          bg="light"
          autohide
          delay={3000}
        >
          <Toast.Body className="text-success">
            Task updated successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </FormWrapper>
  );
};

export default TaskForm;
