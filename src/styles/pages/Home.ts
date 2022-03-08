import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2rem 1rem;
`

export const PokemonListContainer = styled.div`
  display: grid !important;
  grid-gap: 2rem;

  grid-template-columns: repeat(4, 1fr) !important;
`
