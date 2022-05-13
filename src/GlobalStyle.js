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
    p {
      margin: 0;
    }
    .sign-in-form {
      width: 20em;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1em;
    }
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
    .todo-list {
      padding: 0;
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      border: solid 1px gray;
      margin-bottom: 1em;
      padding: 1em;
      gap: 1em;
      width: 20em;
      .edit {
        border: none;
        padding: 0;
        margin: 0;
        flex-grow: 1;
        &-input{
          flex-grow: 1;
          border: none;
          padding: 0;
          margin: 0;
          background-color: black;
          color: inherit;
          font-family: inherit;
          &:focus {
            border: none;
          }
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
      display: flex;
      gap: 1em;
      margin-bottom: 1em;
      .link {
        border: 1px solid gray;
        border-radius: 4px;
        padding: 0.2em 1em;
        text-decoration: none;
        color: inherit;
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