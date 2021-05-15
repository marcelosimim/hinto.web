import { GenderEnum } from '../common/enums/GenderEnum'

/**
 * Interface que define o formato dos dados gerados pelo formulário para criar usuários
 * @author rafaelvictor01
 */
export interface IRegisterForm {
  userName: string
  email: string
  password: string
  confirmPassword: string
  birthDate: Date
  gender: GenderEnum
}
