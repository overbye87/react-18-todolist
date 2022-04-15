import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    margin: 0;
    background-color: #282c34;
    color: antiquewhite;
    font-size: 2em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    input {
      font-size: inherit;
    }
    button {
      font-size: 0.7em;
      color: darkred;
    }
    .checkbox {
      transform:scale(2); 
    }
  }
`;
 
export default GlobalStyle;