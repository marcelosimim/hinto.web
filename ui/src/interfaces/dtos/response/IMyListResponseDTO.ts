import { IMovieResponseDTO } from './IMovieResponseDTO'

/**
 * Define o formato de retorno dos dados para o endpoint que busca a lista de filmes do usuário autenticado
 * @author rafaelvictor01
 */
export interface IMyListResponseDTO {
  dataAtualizacao: string
  dataCriacao: string
  id: number
  midia: IMovieResponseDTO[]
}
