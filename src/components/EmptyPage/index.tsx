import React from "react";
import { Alert } from "react-bootstrap";
import { Wrapper } from "./styles";

const EmptyPage: React.FC = () => {
  return (
    <Wrapper>
      <Alert variant="info">
        <p>Your Todo will appear here! Get started</p>
      </Alert>
    </Wrapper>
  );
};

export default EmptyPage;
