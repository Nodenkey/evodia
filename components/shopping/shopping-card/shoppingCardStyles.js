import styled from "styled-components";
import {palette} from "../../../utils";

export const ShoppingCardWrapper = styled.div`
  cursor: pointer;
  background-color: ${palette.white};
  border-radius: 10px;
  color: black;
  padding: 20px;
  small {
    margin: 0;
    text-transform: uppercase;
  }
  h4 {
    margin: 10px 0;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
  }
  h5 {
    margin: 0;
    font-family: Montserrat, serif;
    letter-spacing: normal;
    font-weight: 500;
  }
  #card-price {
    margin: 10px 0 0;
    button {
      padding: 15px 20px;
    }
  }
`;