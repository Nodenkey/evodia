import styled from "styled-components";
import {palette} from "../../../utils";
import {Flex} from "../../../globals/globalStyles";

export const ShoppingSideBarWrapper = styled.div`
  min-height: calc(100vh - 200px);
  width: 100%;
  background-color: ${palette.darkGrey};
  color: ${palette.white};
  >div:first-child {
    padding: 30px 3vw;
  }
  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 2;
    height: calc(100vh - 80px);
    overflow-y: auto;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .7));
    transition: 300ms ease-in-out;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-200vw)'};
    >div:first-child {
      padding: 20px 5vw;
      width: 70%;
      background-color: ${palette.darkGrey};
    }
  }
`;

export const GoUp = styled(Flex)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  margin: 100px auto 0;
  cursor: pointer;
  svg {
    color: ${palette.lightRed};
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ShoppingMenu = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  width: 40px;
  z-index: 3;
  padding: 0;
    div {
      width: 40px;
      height: 2px;
      border-radius: 5px;
      background-color: white;
    }
  div:nth-child(2) {
    margin: 7px 0;
    width: 30px;
  }
  div:last-child {
    width: 20px;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;