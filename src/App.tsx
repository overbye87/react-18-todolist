import React, { Fragment } from 'react';
import ToDo from './components/ToDo';
import GlobalStyle from './GlobalStyle';
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ToDo />
    </Fragment>
  );
}

export default App;
