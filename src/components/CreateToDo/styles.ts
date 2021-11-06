import styled from "styled-components";
import { Button } from "react-bootstrap";

export const AddButton = styled(Button)`
  &:focus {
    box-shadow: none;
  }
`;

export const AddButtonWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  cursor: pointer;

  width: 100px;
  height: 100px;
  font-size: 80px;
  border-radius: 50%;
  background: linear-gradient(
    77.07deg,
    rgb(69, 183, 204) 0%,
    rgb(75, 207, 187) 100%
  );
  box-shadow: rgb(52 58 64 / 40%) 3px 1px 13px 0;

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
    font-size: 60px;
  }
`;

export const FormWrapper = styled.div`
  margin: 20px 0;

  .form-control:focus {
    box-shadow: none;
  }
`;
