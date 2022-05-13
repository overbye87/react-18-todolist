import Home from "./Home";
import Matrix from "./Matrix";
import Pokemons from "./Pokemons";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ToDo from "./ToDo";

export const pages = [
  { path: '', name: 'Home', element: <Home />},
  { path: 'signin', name: 'SignIn', element: <SignIn />},
  { path: 'signup', name: 'SignUp', element: <SignUp />},
  { path: 'matrix', name: 'Matrix', element: <Pokemons />},
  { path: 'pokemons', name: 'Pokemons', element: <Matrix />},
  { path: 'todo', name: 'ToDo', element: <ToDo />},
];