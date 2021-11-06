import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h3>Spoke.ai</h3>
      </Link>
    </Wrapper>
  );
};

export default Header;
