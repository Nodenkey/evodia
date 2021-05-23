import styled from "styled-components";
import {palette} from "../../utils";
import {Flex} from "../../globals/globalStyles";

export const NavShoppingBagWrapper = styled(Flex)`
  background-color: ${palette.white};
  border: 1px solid ${palette.grey};
  min-height: 200px;  
  max-height: 420px;
  min-width: 100vw;
  border-radius: 0 0 8px 8px;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  padding: 20px 30px;
  font-size: 40px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  overflow-y: auto;
  svg {
    color: ${palette.lightRed};
  }
  button {
    margin: 10px 0;
  }
  @media only screen and (min-width: 600px) {
    top: calc(100% + 15px);
    right: 32px;
    min-width: 300px;
    border-radius: 8px;
  }
`;

export const ShoppingItems = styled(Flex)`
  margin: 10px 0;
  img {
    border-radius: 8px;
  }
  width: 100%;
`;

export const ShoppingItemTextContainer = styled.div`
  margin-left: 30px;
  p, h5 {
    margin: 0;
  }
`;
export const EmptyContainer = styled(Flex)`
  height: 180px;
  width: 100%;
  p {
    margin-bottom: 0;
  }
`;