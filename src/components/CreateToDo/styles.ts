import styled from "styled-components";
import { Button } from "react-bootstrap";

export const AddButton = styled(Button)`
  &:focus {
    box-shadow: none;
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  margin: 20px auto;

  .form-control:focus {
    box-shadow: none;
  }
`;
