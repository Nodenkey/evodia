import styled from "styled-components";
import {palette} from "../../utils";
import {Flex} from "../../globals/globalStyles";

export const NavShoppingBagWrapper = styled(Flex)`
  background-color: ${palette.white};
  border: 1px solid ${palette.grey};
  min-height: 200px;  
  min-width: 300px;
  border-radius: 8px;
  position: absolute;
  top: calc(100% + 15px);
  right: 32px;
  padding: 20px;
  font-size: 40px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  svg {
    color: ${palette.lightRed};
  }
`;