import styled from "styled-components";
import {palette, typeScale} from "../../../utils";

export const HomeBannerWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${palette.black};
  color: ${palette.white};
  padding: 130px 0 50px;
  
  
  @media only screen and (max-width: 600px) {
    img {
      height: 50px !important;
      width: auto !important;
    }
  }

  @media only screen and (min-width: 600px) {
    height: 100vh;
  }
`;

export const HomeBannerTextContainer = styled.div`
  width: 100%;

  h1 {
    margin: 0;
    position: relative;
    overflow: hidden;
    height: calc(${typeScale.headerTwo} + 10px);
    
    .hide-text {
      position: absolute;
      z-index: 2;
      top: 0;
      transform: translateY(100%);
    }
    @media only screen and (min-width: 600px) {
      height: calc(${typeScale.headerOne} + 10px);
    }
  }
  h1:last-of-type {
    margin-bottom: 30px;
  }

  p {
    max-width: 350px;
    position: relative;
    color: ${palette.lightestGrey};
    @media only screen and (min-width: 600px) {
      margin-left: 70px;
      &::before {
        content: '';
        display: inline-block;
        top: 50%;
        background-color: ${palette.lightestGrey};
        height: 1px;
        width: 50px;
        position: absolute;
        left: -70px;
      }
    }
  }

  button {
    margin-top: 30px;
  }
`;