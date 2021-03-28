import { TextForHeaderItemsEnum } from '../components/header/enums/TextForHeaderItemsEnum'
import { SystemRoutes } from '../routes/SystemRoutes'

export const CommonUtils = {
  getTextForTitle(currentRoute: string): string {
    switch (currentRoute) {
      case SystemRoutes.routeToLandingScreen:
        return TextForHeaderItemsEnum.textToLandingScreen
      case SystemRoutes.routeToLoginScreen:
        return TextForHeaderItemsEnum.textToLoginScreen
      case SystemRoutes.routeToRegisterScreen:
        return TextForHeaderItemsEnum.textToRegisterScreen
      default:
        return ''
    }
  }
}
