import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {typeScale} from '../utils';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  ;
  * {
    text-decoration: none;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    font-family: Montserrat, sans-serif;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  .styled-list li {
    margin: 12px 0;
    line-height: 180%;
  }

  @font-face {
    font-family: 'Rockwell';
    font-display: block;
    src: url('/fonts/rockwen.ttf');
  }

  ul {
    li {
      font-size: ${typeScale.paragraph};
      line-height: 180%;
      margin: .8rem 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
