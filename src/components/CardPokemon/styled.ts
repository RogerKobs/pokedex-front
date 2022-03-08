import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  background: #eee;

  img {
    width: 13.5rem;
    height: 13.5rem;
  }
`

export const PokemonInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;

  padding: 0.5rem;

  width: 100%;

  p {
    font-size: 1rem;
    color: var(--gray);
  }

  span {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
`

export const PokemonClassListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface PokemonClassContainerProps {
  color: string
}

export const PokemonClassContainer = styled.div<PokemonClassContainerProps>`
  background: ${props => `var(--${props.color})`};
  color: var(--text-white);

  padding: 0.2rem 2rem;
`
