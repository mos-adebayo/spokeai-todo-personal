import styled, { css } from "styled-components";

import bgImage from "../../assets/images/bg-pattern.svg";
import { boxShadow, gradientPrimaryBackground } from "../../util/stylesheet";

const completedItemWrapper = css`
  ${gradientPrimaryBackground};
`;

export const Wrapper = styled.div<{ completed?: boolean }>`
  border-radius: 12px;
  padding: 15px 30px;
  margin-bottom: 15px;
  background: url(${bgImage}) #fff bottom right no-repeat;

  ${boxShadow};
  ${({ completed }) => completed && completedItemWrapper};
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Text = styled.span`
  font-size: 15px;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const checkedBox = css`
  &:after {
    content: " ";
    display: inline-block;
    width: 0.5rem;
    height: 1rem;
    box-sizing: border-box;
    transform: rotate(40deg);
    border: 0.1rem solid #283451;
    border-top: 0;
    border-left: 0;
  }
`;

export const CheckBox = styled.span<{ checked: boolean }>`
  border: 1px solid #283451;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-right: 10px;
  text-align: center;

  ${({ checked }) => checked && checkedBox};
`;

const checkedItem = css`
  ${Text} {
    text-decoration: line-through;
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
