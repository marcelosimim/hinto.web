/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'
import theme from './theme'

// Aqui é criado o tipo do arquivo de temas automaticamente
export type Theme = typeof theme

/**
 * Necessário para que o import de temas para o código funcione
 * corretamente com todos os devidos atributos e tipos coerentes.
 *
 * @author rafaelvictor01
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
