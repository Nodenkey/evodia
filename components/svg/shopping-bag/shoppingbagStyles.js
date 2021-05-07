import styled from "styled-components";
import {palette} from "../../../utils";

export const ShoppingBagWrapper = styled.svg`
  height: 50px;
  width: 50px;
  cursor: pointer;
  path {
    transition: 300ms ease-in-out;
    fill: ${palette.grey};
  }
  &:hover {
    path {
      fill: ${palette.white}
    }
  }
`;