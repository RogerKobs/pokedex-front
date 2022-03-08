import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --gray: #919191;
    --text-white: #fff;
    --white: #fff;

    //class pokemon
    --bug: #729f3f;
    --dragon: linear-gradient(#53a4cf, #f16e57);
    --electric: #eed535;
    --fairy: #fdb9e9;
    --fighting: #d56723;
    --fire: #fd7d24;
    --flying: linear-gradient(#3dc7ef, #bdb9b8);
    --ghost: #7b62a3;
    --grass: #9bcc50;
    --ground: linear-gradient(#f7de3f, #ab9842);
    --ice: #51c4e7;
    --normal: #a4acaf;
    --poison: #b97fc9;
    --psychic: #f366b9;
    --rock: #a38c21;
    --steel: #9eb7b8;
    --water: #4592c4;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: arial, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong, span {
    font-weight: 600;
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
