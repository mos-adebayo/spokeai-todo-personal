import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const LinkText = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
