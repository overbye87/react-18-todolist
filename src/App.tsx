import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux'
import ToDo from './routes/ToDo';
import GlobalStyle from './GlobalStyle';
import { store } from './store/store';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Matrix from './routes/Matrix';
import Auth from './routes/Auth';
import Pokemons from './routes/Pokemons';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation />
        <Routes>        
          <Route path="/" element={ <Home /> } />
          <Route path="pokemons" element={ <Pokemons /> } />
          <Route path="auth" element={ <Auth /> } />
          <Route path="matrix" element={ <Matrix /> } />
          <Route path="todo" element={ <ToDo /> } />
        </Routes>
        <GlobalStyle />

      </BrowserRouter>
    </Provider>
  );
}

export default App;
