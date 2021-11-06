import React from "react";
import { Alert } from "react-bootstrap";
import {LinkText, Wrapper} from "./styles";
import { useDispatch } from "react-redux";
import { createTaskStarted } from "../../redux/actions/taskActions";

const EmptyPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleStartCreation = () => {
    dispatch(createTaskStarted(true));
  };

  return (
    <Wrapper>
      <Alert variant="info">
        <p>
          Your Todos will appear here!{" "}
          <LinkText onClick={handleStartCreation}>Get started</LinkText>
        </p>
      </Alert>
    </Wrapper>
  );
};

export default EmptyPage;
