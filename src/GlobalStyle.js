import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 2em;
    margin: 0;
    background-color: #282c34;
    color: antiquewhite;
    font-size: 1.2em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .container {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
    input {
      font-size: inherit;
    }
    button {
      font-size: 0.7em;
      color: darkred;
    }
    .list-item {
      display: flex;
      gap: 1em;
      .edit {
        width: 20em;
        
        &-input{
          border: inherit;
          padding: inherit;
          background-color: black;
          color: inherit;
          font-family: inherit;
          width: 20em;

        }
      }
      .checkbox {
        transform:scale(2); 
      }
    }
    .select{
      color: #282c34;
      width: 20em;
    }
    .nav{
      margin-bottom: 1em;
      .link {
        border: 1px solid gray;
        border-radius: 4px;
        padding: 0.2em 1em;
        text-decoration: none;
        &:visited {
          color: inherit;
        }
        &:hover {
          background-color: antiquewhite;
          color: #282c34;
        }
        &--active {
          background-color: gray;
        }
      }
    }
  }
`;
 
export default GlobalStyle;