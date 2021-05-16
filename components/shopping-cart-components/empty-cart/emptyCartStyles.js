import styled from "styled-components";
import {palette} from "../../../utils";
import {Flex} from "../../../globals/globalStyles";

export const EmptyCartWrapper = styled(Flex)`
  min-height: 50vh;
  svg {
    color: ${palette.lightRed};
    font-size: 7rem;
  }
  h5 {
    color: ${palette.grey};
  }
  p {
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
    margin-top: 0;
  }
`;