import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1360px) {
      font-size: 93.75%;
    }

    @media (max-width: 1080px) {
      font-size: 87.25%;
    }

    @media (max-width: 720px) {
      font-size: 80.75%;
    }

    @media (max-width: 450px) {
      font-size: 74.25%;
    }
  }

  body {
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    scroll-behavior: smooth;
  }

  body,
  input,
  textarea,
  button,
  select,
  span,
  p {
    font-family: Roboto, sans-serif;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
  }

  input,
  select {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  a {
    background: none;
    color: inherit;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }

  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4a4f6990;
    border-radius: 3px;
    cursor: move;
  }

  ::-webkit-scrollbar-track {
    background-color: #b8b8be90;
    border: none;
  }
`;
