import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux'
import ToDo from './routes/ToDoPage';
import GlobalStyle from './GlobalStyle';
import { store } from './store/store';
import Navigation from './components/Navigation';
import Home from './routes/HomePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation />
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<ToDo />} />
        </Routes>
        <GlobalStyle />

      </BrowserRouter>
    </Provider>
  );
}

export default App;
