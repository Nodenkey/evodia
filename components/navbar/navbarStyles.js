import styled from "styled-components";

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
  width: 50px;
  background-color: transparent;
  div {
    height: 1px;
    width: 100%;
    background-color: white;
    margin: 7px 0;
    border: 1px solid white;
    border-radius: 500px;
  }
  > div:nth-child(2) {
    width: 70%;
    margin: 7px auto;
  }
`;