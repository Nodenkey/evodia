import styled, {css} from "styled-components";
import {palette} from "../../utils";

export const ButtonWrapper = styled.button`
  width: ${({fluid}) => fluid ? '100%' : 'fit-content'};
  padding: 20px 40px;
  border-radius: 500px;
  cursor: pointer;
  font-family: Rockwell, serif;
  letter-spacing: .05em;
  transition: 300ms ease-in-out;
  ${({fontSize}) => css`font-size: ${fontSize}`};
  ${({squared}) => squared && css`
    border-radius: 10px !important;
  `};
  ${({type}) => type === 'secondary' ? css`
            border: 1px solid ${palette.black};
            background-color: ${palette.black};
            color: ${palette.white};

            &:hover, &:focus {
              background-color: transparent;
              color: ${palette.black};
              outline: none;
            }
          ` : type === 'tertiary' ? css`
            border: 1px solid ${palette.lightRed};
            background-color: transparent;
            color: ${palette.white};

            &:hover, &:focus {
              background-color: ${palette.lightRed};
              color: ${palette.white};
              outline: none;
            }
          `  :
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