import React from 'react'
import {
  Container,
  PokemonInformationContainer,
  ClassListContainer,
  ClassContainer,
} from './styled'

export default function PokemonHeaders() {
  return (
    <>
      <Container>
        <PokemonInformationContainer>
          <div>
            <span>Bulgassauro</span>
            <ClassListContainer>
              <ClassContainer>Grass</ClassContainer>
              <ClassContainer>Grass</ClassContainer>
            </ClassListContainer>
          </div>

          <p>#001</p>
        </PokemonInformationContainer>

        <img
          src="https://ifpb.github.io/javascript-exercises/challenges/w3c/pokedex/code-response/img/bulbasaur.png"
          alt=""
        />
      </Container>
    </>
  )
}
