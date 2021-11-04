import React from 'react';
import { Text, Title, Wrapper } from './styles';

type Props = {
  title: string;
};

const TodoItem: React.FC<Props> = ({ title}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor et expedita facere harum ipsa laborum maiores molestias necessitatibus, nihil nisi odio quis sit? Cumque iste non officiis provident quis.
      </Text>
    </Wrapper>
  );
};

export default TodoItem;
