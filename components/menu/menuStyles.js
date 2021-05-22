import styled from "styled-components";
import {palette} from "../../utils";
import {HeaderThree} from "../../globals/globalStyles";

export const MenuWrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  color: ${palette.white};
  background: linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, .8));
  backdrop-filter: blur(2rem);
  margin-top: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    z-index: 98;
    height: calc(100vh + 80px);
    margin-top: -80px;
  }
`;

export const MenuLink = styled(HeaderThree)`
  position: relative;
  transition: 300ms ease-in-out;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 5px;
    background-color: ${palette.lightRed};
    top: 50%;
    left: -70px;
    transform: translateY(-50%) scale(0);
    transition: 300ms ease-in-out;
    transform-origin: right;
  }
    &:hover {
      &::before {
        transform: translateY(-50%) scale(1);
      }
      color: ${palette.lightRed};
    }
`;