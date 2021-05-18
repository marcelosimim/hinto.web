import { IMovieGenre } from '../../IMovieGenre'
import { IMovieProducer } from '../../IMovieProducer'

/**
 * @todo add descrição
 * @author rafaelvictor01
 */
export interface IMovieResponseDTO {
  dataLancamento: string
  favoritada: boolean
  generos: IMovieGenre[]
  id: number
  imagemURL: string
  produtores: IMovieProducer[]
  sinopse: string
  tipo: string
  titulo: string
}
