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
          ? { height: '32vmax', width: '40vmin' }
          : { height: '20vmax', width: '29vmin' }
      }
      cardStyle={
        props.main
          ? { height: '38vmax', width: '40vmin' }
          : { height: '26vmax', width: '29vmin' }
      }
    />
  )
}
