import React, { useState, useEffect } from 'react';
import { Title, Wrapper } from './styles';
import { Form, ProgressBar } from "react-bootstrap";
import {getProgressStatus} from "../../util/helper";

type Props = {
    todo: TaskItemType;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("danger");

  useEffect(() => {
      const completedItems = todo.items.filter(item =>item.isDone).length;
      const progressPercentage = completedItems === 0 ? 0 : Math.ceil((completedItems / todo.items.length) * 100);
      setProgress(progressPercentage);
  }, [todo]);

  useEffect(() => {
      setStatus(getProgressStatus(progress))
  }, [progress]);

  return (
    <Wrapper>
      <Title>{todo.title}</Title>
        {
            todo.items.length > 0 && <ProgressBar striped now={progress} variant={status} label={`${progress}%`} />
        }

        {
            todo.items.map((item, key) => <div key={key}>
                <Form.Check type="checkbox" defaultChecked={item.isDone} label={item.description} />
            </div>)
        }
    </Wrapper>
  );
};

export default TodoItem;
