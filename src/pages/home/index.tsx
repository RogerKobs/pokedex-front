import React, { useEffect, useState } from 'react'
import { Container, PokemonListContainer } from '../../styles/pages/Home'

import CardPokemon from '../../components/CardPokemon'

import api from '../../service/api.json'

export default function Home() {
  const [pokemonList, setPokemonList] = useState<any[]>([])

  useEffect(() => {
    setPokemonList(api)
  }, [])

  return (
    <>
      <Container>
        <PokemonListContainer>
          {pokemonList?.map(pokemon => (
            <CardPokemon
              key={pokemon.id}
              number={pokemon.id}
              name={pokemon.name}
              pokemonClasses={pokemon.type}
            />
          ))}
        </PokemonListContainer>
      </Container>
    </>
  )
}
