import styled from "styled-components";
import {Flex} from "../../globals/globalStyles";

export const LoaderWrapper = styled(Flex)`
  width: ${({width}) => width ? width : '100vw'};
  height: ${({height}) => height ? height : '100vh'};
  background-color: black;
  svg {
    width: 100px;
    height: 100px;
    overflow: visible;
    #Ellipse_1 {
      z-index: 1;
    }
    #Ellipse_2 {
      z-index: 2;
    }
    #Ellipse_3 {
      z-index: 3;
    }
  }
  @media only screen and (min-width: 600px) {
    svg {
      width: 200px;
      height: 200px;
    }
  }
`;