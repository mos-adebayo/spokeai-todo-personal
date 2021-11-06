import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import ErrorMessage from "../ErrorMessage";

type Props = {
  children: React.ReactElement;
};
const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <ErrorMessage />

      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default AppWrapper;
