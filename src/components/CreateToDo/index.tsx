import React, {ChangeEvent, useState, useEffect} from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import {AddButton, FormWrapper} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/rootReducers";
import {createTaskRequest} from "../../redux/actions/taskActions";

const CreateToDo: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, isCreated } = useSelector((state: RootState) => state.tasks)

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, item: ActionItemPayloadType, index: number) => {
    const newItems = [...items];
    newItems[index] = {
      ...items[index],
      description: e.target.value,
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

  const handleSubmit = () => {
    const actualItems = items.map(({isDone, description}) =>({ isDone, description}))
    actualItems.pop();
    const payload = { id: new Date().getTime(), title: title, items: actualItems}
    dispatch(createTaskRequest(payload))
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

  useEffect(() => {
    if(isCreated && isStarted) {
      resetForm();
    }
  }, [isCreated])

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
          <AddButton disabled={!isStarted || loading} onClick={handleSubmit}>
            Save
          </AddButton>
        </InputGroup>

        {isStarted &&
          items.map((item, index) => (
            <InputGroup className="mb-1" key={index}>
              <InputGroup.Checkbox checked={item.isDone} />
              <FormControl
                value={item.description}
                placeholder="Add Task"
                onChange={(e) => handleChange(e, item, index)}
              />
            </InputGroup>
          ))}
      </Form>
    </FormWrapper>
  );
};

export default CreateToDo;
