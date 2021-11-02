import React from 'react';
import {Text, Title, Wrapper} from './styles';

type Props = {
    title: string;
    content: string;
}

const TodoItem: React.FC<Props> = ({ title, content}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Text>{content}</Text>
        </Wrapper>
    );
};

export default TodoItem;
