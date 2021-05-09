import styled from "styled-components";
import {palette} from "../../utils";

export const FooterWrapper = styled.div`
  background-color: ${palette.black};
  width: 100%;
  padding: 10px 0;
  color: ${palette.white};
  @media only screen and (max-width: 600px) {
    padding: 30px 0;
    > div > div {
      flex-direction: column;
    }
  }

  h5 {
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  svg {
    font-size: 1.5rem;
    margin: 0 10px;
    cursor: pointer;
  }
`;
