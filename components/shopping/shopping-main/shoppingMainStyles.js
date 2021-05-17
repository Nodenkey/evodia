import styled from "styled-components";
import {Grid} from "../../../globals/globalStyles";

export const MainShoppingWrapper = styled(Grid)`
  padding: 20px;
  @media only screen and (max-width: 600px) {
    #shopping-menu-main {
      margin-bottom: 30px;
      z-index: 1;
      position: fixed;
      background-color: black;
      width: 100vw;
      top: 80px;
      left: 0;
      padding: 10px 20px;
    } 
  }
`;

export const CardList = styled.div`
  margin-top: 40px;
`;