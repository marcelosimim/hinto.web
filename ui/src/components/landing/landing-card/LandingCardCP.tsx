import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd'
import CardCP from '../../../common/components/card/CardCP'
import Meta from 'antd/lib/card/Meta'

interface ILandingCardCPProps {
  urlImage: string
  movieTitle: string
  synopsis: string
  main?: boolean
}

/**
 * Abstrai a criação de 1 card de filme para a landing-page
 *
 * @todo Abstrair o componente Meta para não usar nada do antd diretamente aqui
 *
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingCardCP(props: ILandingCardCPProps): JSX.Element {
  return (
    <MainWrapperLandingCardSCP>
      <CardCP
        hoverable={true}
        style={
          props.main
            ? { height: '700px', width: '417px' }
            : { height: '470px', width: '280px' }
        }
        cover={
          <Image
            width={props.main ? 417 : 280}
            height={props.main ? 480 : 320}
            src={props.urlImage}
          />
        }
      >
        <Meta title={props.movieTitle} description={props.synopsis} />
      </CardCP>
    </MainWrapperLandingCardSCP>
  )
}

const MainWrapperLandingCardSCP = styled.div`
  .ant-image {
    margin-left: 1px;
  }
`
