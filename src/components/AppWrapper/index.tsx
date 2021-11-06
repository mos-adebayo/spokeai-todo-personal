import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import ErrorMessage from "../ErrorMessage";
import CreateToDo from "../TodoForm";

type Props = {
  children: React.ReactElement;
};
const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <ErrorMessage />

      <Container>{children}</Container>

      <CreateToDo />
    </React.Fragment>
  );
};

export default AppWrapper;
