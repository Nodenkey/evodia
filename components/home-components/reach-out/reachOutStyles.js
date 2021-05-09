import styled from "styled-components";
import {palette, typeScale} from "../../../utils";
import {Flex} from "../../../globals/globalStyles";

export const ReachOutWrapper = styled(Flex)`
  background-color: ${palette.black};
  min-height: 400px;
  padding: 50px 5vw;
  overflow: hidden;
`;

export const GlassContainer = styled.div`
  position: relative;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Glass = styled.div`
  border: 1px solid rgba(255, 255, 255, .4);
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(to right bottom, rgba(225, 225, 225, .4), rgba(225, 225, 225, .05));
  backdrop-filter: blur(2rem);
  z-index: 3;
  position: relative;
  padding: 50px 5vw;
  color: ${palette.white};
  
  a {
    text-decoration: underline;  
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: ${palette.white};
    opacity: .8;
  }
  
  h5 {
    opacity: .6;
  }
  
  h1 {
    margin: 0;
    cursor: pointer;
    transition: 300ms ease-in-out;
    position: relative;
    opacity: .9;
    display: inline-block;

    @media only screen and (max-width: 900px) {
      font-size: ${typeScale.headerFive};
    }

    @media only screen and (min-width: 900px) {
      &::after {
        content: '';
        height: 5px;
        background-color: white;
        width: 100%;
        position: absolute;
        top: 75%;
        left: 0;
        transition: 300ms ease-in-out;
        transform: scaleX(0);
        transform-origin: left;


      }

      &:hover {
        opacity: 1;

        &::after {
          transform: scaleX(1);
        }
      }
    }
  }
  
  @media only screen and (min-width: 900px) {
    width: 800px;
    max-width: 800px;
  }
`;

export const Circle = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  position: absolute;
  right: ${({right}) => right};
  top: ${({top}) => top};
  z-index: 2;
  background-color: ${palette.lightRed};
`;