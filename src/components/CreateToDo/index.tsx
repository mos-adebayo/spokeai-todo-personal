import React, {ChangeEvent, useState } from 'react';
import { Form, InputGroup, FormControl, Offcanvas } from 'react-bootstrap';
import {AddButton, FormWrapper} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/rootReducers";
import {createTaskRequest} from "../../redux/actions/taskActions";

const CreateToDo: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.tasks)

  const [titlePlaceholder, setTitlePlaceholder] = useState('Add new task...');
  const [isStarted, setIsStarted] = useState(false);
  const [title, setTitle] = useState('');
  const [items, setItems] = useState<ActionItemPayloadType[]>([
    {
      isDone: false,
      description: '',
      isDirty: false
    }
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>, item: ActionItemPayloadType, index: number) => {
    const newItems = [...items];
    const value = e.target.name === 'isDone' ? e.target.checked : e.target.value;
    newItems[index] = {
      ...items[index],
      [e.target.name]: value,
      isDirty: true
    };

    if (!item.isDirty) {
      newItems.push({
        isDone: false,
        description: '',
        isDirty: false
      });
    }

    setItems(newItems);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    if (!isStarted) {
      setIsStarted(true);
    }
  };

  const handleTitleFocus = (isFocus: boolean) => {
    if (isStarted) {
      return;
    }

    setTitlePlaceholder(isFocus ? 'Title' : 'Add new task . . .');
  };

  const resetForm = () => {
    setIsStarted(false);
    setTitle('');
    setItems([
      {
        isDone: false,
        description: '',
        isDirty: false
      }
    ])
  };

  const handleSubmit = () => {
    const actualItems = items.filter(({description}) => description)
                             .map(({description,isDone}) => ({isDone, description}));
    const payload = { id: new Date().getTime(), title: title, items: actualItems}
    dispatch(createTaskRequest(payload))
    resetForm();
  };

  const handleClose = () => {
    resetForm();
  };

  return (
    <FormWrapper>
      <Form>
        <InputGroup className="mb-2">
          <Form.Control
              value={title}
              type="text"
              placeholder={titlePlaceholder}
              onFocus={() => handleTitleFocus(true)}
              onBlur={() => handleTitleFocus(false)}
              onChange={handleTitleChange}
          />
        </InputGroup>
      </Form>

      <Offcanvas show={isStarted} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <InputGroup className="mb-2">
            <Form.Control
                value={title}
                type="text"
                placeholder={titlePlaceholder}
                onFocus={() => handleTitleFocus(true)}
                onBlur={() => handleTitleFocus(false)}
                onChange={handleTitleChange}
            />
            <AddButton disabled={!isStarted || loading} onClick={handleSubmit}>
              Save
            </AddButton>
          </InputGroup>

          {items.map((item, index) => (
          <InputGroup className="mb-1" key={index}>
            <InputGroup.Checkbox checked={item.isDone} name="isDone" onChange={(e: any) => handleChange(e, item, index)} />
            <FormControl
                value={item.description}
                name="description"
                placeholder="Add Task"
                onChange={(e) => handleChange(e, item, index)}
            />
          </InputGroup>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </FormWrapper>
  );
};

export default CreateToDo;
