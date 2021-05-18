// eslint-disable-next-line prettier/prettier
import { GenderEnum } from '../../../common/enums/GenderEnum';

/**
 * Define o formato de envio dos dados para criar um novo usuário
 * @author marcelosimim
 */
export interface IUpdateUserRequestDTO {
  senha: string
  dataNascimento: string
  sexo: GenderEnum
}
