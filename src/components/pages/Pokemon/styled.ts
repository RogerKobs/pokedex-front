import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
`

export const PokemonInformationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  div {
    span {
      font-size: 1.5rem;
      font-weight: 800;

      color: var(--white);
    }
  }

  p {
    font-weight: 700;

    color: var(--white);
  }
`

export const ClassListContainer = styled.div`
  display: flex;

  margin: 1rem 0;
`

export const ClassContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  background: var(--grass);

  width: 5rem;
  height: 1.5rem;

  border-radius: 10px;

  &:first-child {
    margin-right: 0.5rem;
  }

  &:last-child {
    margin-left: 0.5rem;
  }
`
