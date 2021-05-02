import React from 'react'
import MovieCardCP from '../../../common/components/movie-card/MovieCardCP'

interface IHomeMovieCardCPProps {
  urlImage: string
  movieTitle: string
  movieID: number
  synopsis: string
  onClick: (movieID: number) => void
}

/**
 * Abstrai a criação de 1 card de filme para a home-page
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HomeMovieCardCP(
  props: IHomeMovieCardCPProps
): JSX.Element {
  return (
    <MovieCardCP
      movieTitle={props.movieTitle}
      synopsis={props.synopsis}
      urlImage={props.urlImage}
      movieID={props.movieID}
      onClick={props.onClick}
      enablePreview={false}
      imageStyle={{ height: '350px', width: '340px' }}
      cardStyle={{ height: '520px', width: '340px' }}
    />
  )
}
