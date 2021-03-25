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
`
