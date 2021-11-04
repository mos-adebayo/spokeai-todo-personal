import React, {ChangeEvent, useState} from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import {AddButton, FormWrapper} from './styles';

type TaskType = {
  isChecked: boolean;
  description: string;
  isDirty: boolean;
};

const CreateToDo: React.FC = () => {
  const [titlePlaceholder, setTitlePlaceholder] = useState('Add new task...');
  const [isStarted, setIsStarted] = useState(false);
  const [title, setTitle] = useState('');
  const [items, setItems] = useState<TaskType[]>([
    {
      isChecked: false,
      description: '',
      isDirty: false
    }
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, item: TaskType, index: number) => {
    const newItems = [...items];
    newItems[index] = {
      ...items[index],
      description: e.target.value,
      isDirty: true
    };

    if (!item.isDirty) {
      newItems.push({
        isChecked: false,
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
   console.log('Form', items, title);
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
          <AddButton disabled={!isStarted} onClick={handleSubmit}>
            Save
          </AddButton>
        </InputGroup>

        {isStarted &&
          items.map((item, index) => (
            <InputGroup className="mb-1" key={index}>
              <InputGroup.Checkbox checked={item.isChecked} />
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
