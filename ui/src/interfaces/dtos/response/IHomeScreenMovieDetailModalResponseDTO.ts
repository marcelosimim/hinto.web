/**
 * Define o formato esperado de retorno para os dados no request que busca os detalhes de um filme
 * para preencher o modal da tela principal do sistema
 * @author rafaelvictor01
 */
export interface IHomeScreenMovieDetailModalResponseDTO {
  movieID: number
  movieTitle: string
  synopsis: string
  urlImage: string
  likes: number
  actors: string[]
  director: string
}
