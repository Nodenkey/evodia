import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { typeScale } from '../utils';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
    text-decoration: none;
  } 
  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  body {
    font-family: Montserrat, sans-serif;
    overflow-x: hidden;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  .styled-list li {
      margin: 12px 0;
      line-height: 180%;
    }
  ul {
    li {
      font-size: ${typeScale.paragraph};
      line-height: 180%;
      margin: .8rem 0;
    }
  }
`;
