import React from 'react'
import {
  Container,
  PokemonInformationContainer,
  PokemonClassListContainer,
  PokemonClassContainer,
} from './styled'

import { formatNamePhoto } from '../../utils/formatString'

interface CardPokemonProps {
  number: string
  name: string
  pokemonClasses: any[]
}

export default function CardPokemon({
  number,
  name,
  pokemonClasses,
}: CardPokemonProps) {
  return (
    <>
      <Container>
        <img
          src={`https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/code-response/img/${formatNamePhoto(
            name,
          )}.png`}
          alt=""
        />

        <PokemonInformationContainer>
          <p>#{number}</p>
          <span>{name}</span>

          <PokemonClassListContainer>
            {pokemonClasses.map(pokemonClass => (
              <PokemonClassContainer key={pokemonClass} color={pokemonClass}>
                {pokemonClass}
              </PokemonClassContainer>
            ))}
          </PokemonClassListContainer>
        </PokemonInformationContainer>
      </Container>
    </>
  )
}
