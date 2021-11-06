import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";
import { CheckBox } from "../TodoItem/styles";

export const AddButton = styled(Button)`
  &:focus {
    box-shadow: none;
  }

  background: linear-gradient(
    77.07deg,
    rgb(69, 183, 204) 0%,
    rgb(75, 207, 187) 100%
  );
  outline: none;
  border: none;
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

export const ItemWrapper = styled.div`
  border-bottom: 1px solid #dfdfdf;
  margin: 0 -16px;
  padding: 10px 16px 8px;

  ${CheckBox} {
    margin-right: 5px;
  }

  &:first-of-type {
    border-top: 1px solid #dfdfdf;
  }
`;

const editItemWrapper = css`
  ${ItemWrapper} {
    margin: 0;
  }
`;

export const ItemsWrapper = styled.div<{ editMode?: boolean }>`
  margin-top: 15px;

  .form-control {
    height: 1.5rem;
    border: none;
  }

  ${({ editMode }) => editMode && editItemWrapper};
`;
