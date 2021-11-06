import styled from "styled-components";
import { gradientPrimaryBackground } from "../../util/stylesheet";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 45px 20px;
  height: 100px;
  margin-bottom: 25px;
  font-family: "Mochiy Pop One", sans-serif;

  ${gradientPrimaryBackground};
`;
