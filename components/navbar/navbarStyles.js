import styled from "styled-components";
import {palette} from "../../utils";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const MenuButton = styled.button`
  outline: none;
  border: none;
  width: 37px;
  background-color: transparent;
  cursor: pointer;
  transition: 300ms ease-in-out;
  padding: 0;

  div {
    height: 1px;
    width: 37px;
    background-color: white;
    margin: 7px 0;
    border: 1px solid white;
    border-radius: 500px;
    transform: rotate(-45deg);
    transition: 300ms ease-in-out;
  }
  > div:nth-child(2) {
    width: 25px;
    margin: 7px auto;
    transition: 300ms ease-in-out;
    transform: ${({open}) => open ? 'translateX(30px)' : 'translateX(0)'};
    opacity: ${({open}) => open ? '0' : '1'};
  }
  >div:nth-child(1) {
    transform: ${({open}) => open ? 'rotate(45deg) translate(25%, 25%)' : 'rotate(0deg) translate(0, 0)'};
  }
  >div:nth-child(3) {
    transform: ${({open}) => open ? 'rotate(-45deg) translate(30%, -200%)' : 'rotate(0deg) translate(0, 0)'};
  }
`;

export const ShoppingBagContainer = styled.div`
  position: relative;
  cursor: pointer;
  svg {
    z-index: 2;
    position: relative;
  }
  p {
    position: absolute;
    z-index: 1;
    color: ${palette.white};
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 0;
    font-weight: 700;
  }
`;