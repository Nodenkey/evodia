import styled from "styled-components";
import {Grid} from "../../globals/globalStyles";
import {palette} from "../../utils";

export const PerfumeDetailsWrapper = styled(Grid)`
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  background-color: ${palette.black};
  color: ${palette.white};
  #details-image {
    border-radius: 0 8px 8px 0;
    height: 350px;
    img {
      border-radius: 0 10px 10px 0;
    }
    @media (min-width: 1700px) {
      margin-left: calc(800px - 50vw);
      width: calc(100% + 50vw - 800px);
    }
    @media (min-width: 1408px) {
      margin-left: calc(650px - 50vw);
      width: calc(100% + 50vw - 650px);
    }
    @media (min-width: 1216px) {
      margin-left: calc(560px - 50vw);
      width: calc(100% + 50vw - 560px);
    }
    @media (min-width: 1024px) {
      margin-left: calc(480px - 50vw); 
      width: calc(100% + 50vw - 480px);
    }
    @media (max-width: 600px) {
      padding: 0 5vw;
      img {
        border-radius: 10px;
      }
    }
  }


  @media only screen and (min-width: 1200px) {
      min-height: calc(100vh - 80px);
    #details-image {
      height: 100%;
    }
    } 
  @media only screen and (max-width: 1200px) {
      grid-gap: 30px;
    }
`;

export const PerfumeDetailsContainer = styled.div`
  background-color: black;
`;


export const PerfumeTextContainer = styled.div`
  h2{
    margin-top: 0;
  }
  button:first-of-type {
    margin-right: 10px;
  }
  p {
    margin-top: 35px;
    color: ${palette.lightGrey};
  }
  @media only screen and (min-width: 600px) {
    button:first-of-type {
      margin-right: 50px;
    }
  }
`;