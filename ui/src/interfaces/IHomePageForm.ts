// eslint-disable-next-line prettier/prettier
import { GenderEnum } from '../common/enums/GenderEnum';

/**
 * Interface que define o formato dos dados gerados pelo formulário alterar dados do usuário
 * @author marcelosimim
 */
export interface IHomePageForm {
  newPassword: string
  confirmNewPassword: string
  birthDate: Date
  gender: GenderEnum
}
