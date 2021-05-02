import { IMyListMovie } from '../../IMyListMovie'

/**
 * Define o formato de retorno dos dados para o request feito pela tab da lista de filmes do usuário
 * @author rafaelvictor01
 */
export interface IMyListTabResponseDTO {
  list: IMyListMovie[]
  total: number
}
