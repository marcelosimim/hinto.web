import React from 'react'
import MovieCardCP from '../../../common/components/movie-card/MovieCardCP'

interface IHomeCardCPProps {
  urlImage: string
  movieTitle: string
  synopsis: string
}

/**
 * Abstrai a criação de 1 card de filme para a home-page
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HomeCardCP(props: IHomeCardCPProps): JSX.Element {
  return (
    <MovieCardCP
      movieTitle={props.movieTitle}
      synopsis={props.synopsis}
      urlImage={props.urlImage}
      imageStyle={{ height: '320px', width: '280px' }}
      cardStyle={{ height: '470px', width: '280px' }}
    />
  )
}
