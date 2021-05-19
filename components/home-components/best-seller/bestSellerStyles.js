import styled from "styled-components";
import {Section} from "../../../globals/globalStyles";
import {typeScale} from "../../../utils";

export const BestSellerWrapper = styled(Section)`
  padding-bottom: 100px;
    h4 {
      margin: 20px 0 15px;
    }
  button {
    font-size: ${typeScale.small};
    padding: 15px 20px;
  }
  .image-container {
    @media only screen and (max-width: 900px) {
      height: 500px;
    }
    @media only screen and (max-width: 600px) {
      height: 300px;
    }
  }
  @media only screen and (min-width: 600px) {
    >div>div>div:nth-child(2)>div:first-child {
      height: 500px;
    }
  }
  .buy {
    p {
      font-family: Rockwell, serif;
      letter-spacing: .05em;
      font-weight: 600;
    }
  }
`;