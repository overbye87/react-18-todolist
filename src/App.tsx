import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import ToDo from './components/ToDo';
import GlobalStyle from './GlobalStyle';
import { store } from './store/store';
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <ToDo />
      </Provider>
    </Fragment>
  );
}

export default App;
