import styled from "styled-components";
import {Flex, Grid} from "../../globals/globalStyles";
import {palette} from "../../utils";

export const ShoppingCartWrapper = styled.div`
  min-height: 80vh;
  margin-top: 80px;
  h2 {
    margin-top: 120px;
  }
  h5 {
    margin-bottom: 20px;
  }
  img {
    border-radius: 10px;
  }
  .shopping-cart-text {
    margin-left: 50px;
    h5 {
      margin-top: 0;
    }
    p {
      margin-bottom: 0;
    }
  }
  .item-row {
    margin-top: 50px;
  }
  .item-row ~ .item-row {
    margin-top: 30px;
  }
  .item-row {
    margin-bottom: 0;
  }
`;

export const AddMinus = styled(Flex)`
  p {
    margin: 0 10px;
  }
  img {
    cursor: pointer;
  }
`;

export const ShoppingCartTitle = styled(Grid)`
  color: ${palette.darkGrey};
`;