import React, { useState, useEffect } from "react";
import {
  CheckBox,
  HeaderWrapper,
  ItemWrapper,
  Text,
  Title,
  Wrapper
} from "./styles";
import { ProgressBar } from "react-bootstrap";
import { getProgressStatus } from "../../util/helper";

type Props = {
  todo: TaskItemType;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("danger");

  useEffect(() => {
    const completedItems = todo.items.filter((item) => item.isDone).length;
    const progressPercentage =
      completedItems === 0
        ? 0
        : Math.ceil((completedItems / todo.items.length) * 100);
    setProgress(progressPercentage);
  }, [todo]);

  useEffect(() => {
    setStatus(getProgressStatus(progress));
  }, [progress]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>{todo.title}</Title>
        {todo.items.length > 0 && (
          <ProgressBar
            striped
            now={progress}
            variant={status}
            label={`${progress}%`}
          />
        )}
      </HeaderWrapper>

      {todo.items.map((item, key) => (
        <ItemWrapper key={key}>
          <CheckBox checked={item.isDone} />
          <Text>{item.description}</Text>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default TodoItem;
