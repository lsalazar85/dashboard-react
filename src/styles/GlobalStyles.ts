import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    
    @media(min-width: 200px){
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar, &::-webkit-scrollbar, &::-webkit-scrollbar-thumb {
        display: none;
      }
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, h4, h5, p, button { margin: 0; padding: 0; list-style-type: none; text-decoration: none }
  button { background: transparent; border: 0; outline: 0; cursor: pointer; }
  body {
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    margin: 0;
    padding: 0;;
    background: ${colors.White};

    @media(min-width: 200px){
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar, &::-webkit-scrollbar, &::-webkit-scrollbar-thumb {
        display: none;
      }
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    outline: 0;
  }
  input {
    outline: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  }
`;
