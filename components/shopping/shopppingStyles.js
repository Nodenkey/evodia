import styled from "styled-components";
import {palette} from "../../utils";
import {Grid} from "../../globals/globalStyles";

export const ShoppingWrapper = styled(Grid)`
  margin-top: 80px;
  background-color: ${palette.black};
  min-height: calc(100vh - 200px);
`;