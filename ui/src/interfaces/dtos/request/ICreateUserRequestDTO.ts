import { GenderEnum } from '../../../common/enums/GenderEnum'

/**
 * Define o formato de envio dos dados para criar um novo usuário
 * @author rafaelvictor01
 */
export interface ICreateUserRequestDTO {
  nome: string
  email: string
  senha: string
  dataNascimento: string
  sexo: GenderEnum
}
