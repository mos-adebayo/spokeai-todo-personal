import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: rgb(166 171 189 / 20%) 0 10px 20px;
  padding: 15px 30px;
  margin-bottom: 15px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  color: #49486c;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Text = styled.span`
  color: #49486c;
  font-size: 15px;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const CheckBox = styled.span`
  border: 1px solid #49486c;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-right: 10px;
  text-align: center;
`;

const checkedItem = css`
  ${Text} {
    text-decoration: line-through;
  }

  ${CheckBox} {
    &:after {
      content: " ";
      display: inline-block;
      width: 0.5rem;
      height: 1rem;
      box-sizing: border-box;
      transform: rotate(40deg);
      border: 0.1rem solid #49486c;
      border-top: 0;
      border-left: 0;
    }
  }
`;

export const ItemWrapper = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: flex-start;
  margin: 15px 0;
  ${({ checked }) => checked && checkedItem};

  ${Text} {
    flex: 1;
    margin-top: -4px;
  }
`;
