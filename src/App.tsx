import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux'
import ToDo from './pages/ToDo';
import GlobalStyle from './GlobalStyle';
import { store } from './store/store';
import Navigation from './components/Navigation';
import { pages } from './pages';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation />
        <Routes>
          {pages.map((page) => 
            <Route key={page.name} path={page.path} element={page.element} />
          )}
        </Routes>
        <GlobalStyle />

      </BrowserRouter>
    </Provider>
  );
}

export default App;
