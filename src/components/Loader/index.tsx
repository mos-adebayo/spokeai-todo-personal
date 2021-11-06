import React from "react";
import { Spinner } from "react-bootstrap";
import { Wrapper } from "./styles";

type Props = {
  isLoading: boolean;
};
const Index: React.FC<Props> = ({ isLoading }) => {
  if (!isLoading) return <React.Fragment />;

  return (
    <Wrapper>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Wrapper>
  );
};

export default Index;
