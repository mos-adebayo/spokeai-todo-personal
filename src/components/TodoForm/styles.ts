import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";
import { CheckBox } from "../TodoItem/styles";
import { gradientPrimaryBackground, boxShadow } from "../../util/stylesheet";

export const AddButton = styled(Button)`
  &:focus {
    box-shadow: none;
  }

  outline: none;
  border: none;

  ${gradientPrimaryBackground};
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

  ${gradientPrimaryBackground};
  ${boxShadow};

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
    font-size: 60px;
  }
`;

export const FormWrapper = styled.div`
  margin: 20px 0;

  .form-control:active,
  .form-control:focus {
    box-shadow: none;
    border-color: #5f9ea0;
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
