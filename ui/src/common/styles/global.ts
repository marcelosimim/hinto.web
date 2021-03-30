import { createGlobalStyle } from 'styled-components'

/**
 * Este é o arquivo que contem as configurações globais de CSS da aplicação
 * OBS: Não confundir com o arquivo de TEMAS. O arquivo de temas contém recursos
 * que PODEM ser utilizados a qualquer momento. Este arquivo define o que
 * necessáriamente SERÁ aplicado em todas as telas
 *
 * @author rafaelvictor01
 */
export default createGlobalStyle`
  width: 100vw;
  height: 100vw;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.mainBackground};
    color: ${props => props.theme.colors.mainTextColor};
    font: 400 16px Roboto, sans-serif;
  }

  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus,
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    border: none;
    outline: none !important;
    box-shadow: none !important;
    -webkit-text-fill-color: #e1e1e6;
    -webkit-box-shadow: 0 0 0px 1000px #101013 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`
