import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;
