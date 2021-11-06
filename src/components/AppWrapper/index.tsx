import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header";

type Props = {
  children: React.ReactElement;
};
const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default AppWrapper;
