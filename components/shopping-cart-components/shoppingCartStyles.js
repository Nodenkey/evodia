import styled from "styled-components";
import {Flex, Grid} from "../../globals/globalStyles";
import {palette} from "../../utils";

export const ShoppingCartWrapper = styled.div`
  min-height: calc(100vh - 213px);
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
  @media only screen and (min-width: 600px) {
    .shopping-cart-text {
      margin-left: 50px;
    }
  }
`;

export const DesktopGridList = styled(Grid)`
    @media only screen and (max-width: 600px) {
      display: none;
    }
`;

export const PhoneListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: left;
  grid-gap: 10px 10vw;
`;

export const PhoneListWrapper = styled.div`
  position: relative;
  #list-close {
    position: absolute;
    top: -10px;
    right: 20px;
  }
  @media only screen and (min-width: 600px) {
    display: none;
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;