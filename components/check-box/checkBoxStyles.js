import styled from "styled-components";
import {palette} from "../../utils";

export const CategoryItemsLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 15px;
  position: relative;
  width: fit-content;
  svg {
    color: black;
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.2rem;
    display: none;
  }
`;

export const CategoryItemsCheck = styled.input`
  margin: 0 10px 0 0;
  appearance: none;
  border: 1px solid ${palette.white};
  background-color: ${palette.white};
  padding: 15px;
  border-radius: 5px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;

  &:active, &:checked:active, &:checked, &:focus {
    border: 1px solid ${palette.black};
    outline: none;
  }

  &:checked~svg{
    display: inline-block;
  }
`;