import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    height: 100%;
  }

  body {
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
