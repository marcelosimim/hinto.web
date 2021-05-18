import React from 'react'
import MovieCardCP from '../../../common/components/movie-card/MovieCardCP'

interface ILandingMovieCardCPProps {
  urlImage?: string
  movieTitle?: string
  synopsis?: string
  main?: boolean
  loading?: boolean
}

/**
 * Abstrai a criação de 1 card de filme para a landing-page
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingMovieCardCP(
  props: ILandingMovieCardCPProps
): JSX.Element {
  return (
    <MovieCardCP
      movieTitle={props.movieTitle}
      synopsis={props.synopsis}
      loading={props.loading}
      urlImage={props.urlImage}
      imageStyle={
        props.main
          ? { height: '580px', width: '450px' }
          : { height: '350px', width: '340px' }
      }
      cardStyle={
        props.main
          ? { height: '750px', width: '450px' }
          : { height: '520px', width: '340px' }
      }
    />
  )
}
