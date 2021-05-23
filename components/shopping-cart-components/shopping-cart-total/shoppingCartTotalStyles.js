import styled from "styled-components";
import {typeScale} from "../../../utils";
import {Flex} from "../../../globals/globalStyles";

export const ShoppingCartTotalWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;

  .total {
    font-size: ${typeScale.paragraph};
    @media only screen and (min-width: 600px) {
      font-size: ${typeScale.headerFive};
    }
  }
  @media only screen and (min-width: 600px) {
    padding: 50px 0;
  }

  svg {
    font-size: 2rem;
    margin-right: 20px;
    margin-bottom: 3px;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 600px) {
    margin-left: auto;
    width: 300px;
  }
`;

export const PaymentButtonContainer = styled(Flex)`
  margin-top: 30px;
  @media only screen and (max-width: 600px) {
    flex-direction: row-reverse;
    svg {
      display: none;
    }

    div:last-child {
      margin-right: 10vw;
    }

    h5 {
      text-decoration: underline;
    }
  }
  @media only screen and (min-width: 600px) {
    button {
      width: 300px;
    }
  }
`;