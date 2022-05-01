import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../components/Pokemon'
import { IPokemon } from '../types'

const Pokemons = () => {
  const [List, setList] = useState<IPokemon[]>([]);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(res => {
        setList(res.data.results);
      });
  }, []);
  return (
    <>
      <h1>Pokemons</h1>
      {List.map(pokemon => (
        <Pokemon
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
    </>
  )
}

export default Pokemons
