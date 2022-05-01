import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { IPokemon, IPokemonData } from '../types'

type props = {
  pokemon: IPokemon
}

const Pokemon: React.FC<props> = (props) => {
  const [pokemonData, setPokemonData] = useState<null | IPokemonData>(null)
  useEffect(() => {
    axios
      .get(props.pokemon.url)
      .then(res => {
        setPokemonData(res.data);
        console.log(res.data)
      });
  }, [props.pokemon.url]);
  
  if (!pokemonData) return <></> 
  return (
    <Container>
      <p>{pokemonData.id}</p>
      <p>{pokemonData.name}</p>
      <img src={pokemonData.sprites.front_default} alt="front_default"></img>
    </Container>

  )
}

const Container = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  border: solid 1px gray;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 4px;
`;

export default Pokemon