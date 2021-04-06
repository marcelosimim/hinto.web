import React from 'react'
import MovieCardCP from '../../../common/components/movie-card/MovieCardCP'
interface ILandingCardCPProps {
  urlImage: string
  movieTitle: string
  synopsis: string
  main?: boolean
}

/**
 * Abstrai a criação de 1 card de filme para a landing-page
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingCardCP(props: ILandingCardCPProps): JSX.Element {
  return (
    <MovieCardCP
      movieTitle={props.movieTitle}
      synopsis={props.synopsis}
      urlImage={props.urlImage}
      imageStyle={
        props.main
          ? { height: '480px', width: '417px' }
          : { height: '320px', width: '280px' }
      }
      cardStyle={
        props.main
          ? { height: '700px', width: '417px' }
          : { height: '470px', width: '280px' }
      }
    />
  )
}
