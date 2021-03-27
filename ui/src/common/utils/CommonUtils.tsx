export const CommonUtils = {
  getTextForTitle(currentRoute: string): string {
    switch (currentRoute) {
      case '/':
        return 'Sobre nós'
      case '/login':
        return 'Login'
      case '/cadastro':
        return 'Cadastre-se'
      default:
        return ''
    }
  }
}
