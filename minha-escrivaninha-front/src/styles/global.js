import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  li {
    list-style: none;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
