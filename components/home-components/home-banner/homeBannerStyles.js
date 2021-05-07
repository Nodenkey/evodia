import styled from "styled-components";
import {palette} from "../../../utils";

export const HomeBannerWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${palette.black};
  color: ${palette.white};
  padding: 130px 0 50px;

  img {
    width: 100% !important;
    min-width: 100% !important;
    min-height: 100% !important;
  }

  @media only screen and (min-width: 600px) {
    height: 100vh;
  }
`;

export const HomeBannerTextContainer = styled.div`
  width: 100%;

  h1 {
    margin-top: 0;
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