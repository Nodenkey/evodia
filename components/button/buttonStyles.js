import styled, {css} from "styled-components";
import {palette} from "../../utils";

export const ButtonWrapper = styled.button`
  width: ${({fluid}) => fluid ? '100%' : 'fit-content'};
  padding: 25px 40px;
  border-radius: 500px;
  cursor: pointer;
  font-family: Rockwell, serif;
  letter-spacing: .05em;
  transition: 300ms ease-in-out;
  ${({secondary}) => secondary ? css`
    border: 1px solid ${palette.black};
    background-color: ${palette.black};
    color: ${palette.white};
  ` :
    css`
      border: 1px solid ${palette.lightRed};
      background-color: ${palette.lightRed};
      color: ${palette.white};
      &:hover, &:focus {
        background-color: transparent;
        outline: none;
      }
    `
};
`;