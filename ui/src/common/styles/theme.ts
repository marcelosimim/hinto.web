/**
 * Este é o arquivo que contem os TEMAS da aplicação. O arquivo de temas
 * contém recursos que PODEM (e devem) ser utilizados a qualquer momento.
 * Nenhuma cor, nenhum estilo, nenhum espaçamento, etc... NADA deve ser usado
 * diretamente no código. Deve-se registrar TUDO aqui e, depois, importar para o código
 *
 * @author rafaelvictor01
 */
const theme = {
  colors: {
    mainBackground: '#101013',

    mainTextColor: '#e1e1e6',
    redError: '#ff4d4f',
    greenSuccess: '#52c41a',
    yellowAlert: '#faad14',

    primary: '#4447E2',
    secondary: '#5F5F6E',

    headerAndFooter: '#1C1C24',
    headerAndFooterDivisor: '#262631',
    card: '#2D2D3A'
  },
  zIndex: {
    headerAndFooter: 1000
  },
  defaultSize: {
    headerAndFooter: '50px'
  },
  other: {
    defaultBorderRadius: '9px'
  }
}

export default theme
