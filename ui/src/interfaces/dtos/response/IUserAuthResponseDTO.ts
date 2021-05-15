import { GenderEnum } from '../../../common/enums/GenderEnum'

/**
 * Define o formato de retorno dos dados para um usuário autenticado.
 * @author rafaelvictor01
 */
export interface IUserAuthResponseDTO {
  nome: string
  sexo: GenderEnum
  email: string
  id: number
  ativo: boolean
  dataCriacao: string
  dataNascimento: string
  ultimoAcesso: string
}
