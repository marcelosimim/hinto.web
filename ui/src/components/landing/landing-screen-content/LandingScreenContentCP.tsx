import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import TextCP from '../../../common/components/text/TextCP'
import HintoTextCP from '../../../common/components/hinto-text/HintoTextCP'
import LandingMovieCardCP from '../landing-movie-card/LandingMovieCardCP'
import LandingTopTextCP from '../landing-top-text/LandingTopTextCP'
import axios from 'axios'
import createNotification from '../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../common/components/notification/enums/NotificationTypeEnum'
import { GlobalContext } from '../../../common/context/GlobalContext'

/**
 * Conteúdo da tela de apresentação do sistema
 *
 * @todo Abstrair os componentes Col e Row para não usar nada do antd diretamente aqui - Baixo impacto pra muito esforço... deixar pra depois
 *
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingScreenContentCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)
  
  const [movieList, setMovieList] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect( () => {
     onMount();

  }, [])
  async function onMount(): Promise<void> {

    globalContext.axiosRecommendation
      .get('/top')
      .then(request => {
        console.log(request)
        if (request.status === 200) {
          setMovieList(request.data)
        }
        setLoading(false);
      })
      .catch(error => {
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Tivemos algum erro ao procurar recomendações.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }
  if (isLoading) {
    return <div className="App"></div>;
  }
  return (
    <MainWrapperLandingScreenContentSCP>
      <LandingTopTextSCP>
        <LandingTopTextCP />
      </LandingTopTextSCP>

      <MainCardWrapperSCP>
        <LandingMovieCardCP
          main={true}
          synopsis={movieList[0].sinopse}
          movieTitle={movieList[0].titulo}
          urlImage={movieList[0].imagemURL}
        />
      </MainCardWrapperSCP>

      <RightWrapperAreaSCP>
        <HintoTextSCP>
          <HintoTextCP />
        </HintoTextSCP>

        <BottomTextWrapperSCP>
          <TextCP
            content={
              'Gosta de filmes, séries e animes? Vem criar com a gente sua própria biblioteca com ' +
              'tudo isso! Na Hinto vamos te ajudar a tomar as melhores decisões para o meu momento ' +
              'de lazer ser cada vez melhor!'
            }
          />
        </BottomTextWrapperSCP>

        <DefaultCardsWrapperSCP>
          <LandingMovieCardCP
            synopsis={movieList[1].sinopse}
            movieTitle={movieList[1].titulo}
            urlImage={movieList[1].imagemURL}
          />

          <LandingMovieCardCP
            synopsis={movieList[2].sinopse}
            movieTitle={movieList[2].titulo}
            urlImage={movieList[2].imagemURL}
          />

          <LandingMovieCardCP
            synopsis={movieList[3].sinopse}
            movieTitle={movieList[3].titulo}
            urlImage={movieList[3].imagemURL}
          />
        </DefaultCardsWrapperSCP>
      </RightWrapperAreaSCP>
    </MainWrapperLandingScreenContentSCP>
  )
}

const MainWrapperLandingScreenContentSCP = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display: grid;
  column-gap: 30px;
  grid-template-areas:
    'topText .'
    'mainCard rightArea';
  grid-template-columns: 450px 1fr;
`
const LandingTopTextSCP = styled.div`
  display: grid;
  max-width: 450px;
  grid-area: topText;
`
const MainCardWrapperSCP = styled.div`
  display: grid;
  grid-area: mainCard;
  max-width: 450px;
`
const RightWrapperAreaSCP = styled.div`
  display: grid;
  grid-area: rightArea;
  width: 100%;
  grid-template-areas:
    'hintoText'
    'bottomText'
    'defaultCardsArea';
`
const HintoTextSCP = styled.div`
  display: grid;
  grid-area: hintoText;

  max-width: 700px;
  justify-self: center;
`
const BottomTextWrapperSCP = styled.div`
  display: grid;
  grid-area: bottomText;
  justify-self: center;

  max-width: 800px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${props => props.theme.colors.headerAndFooterDivisor};
  margin-bottom: 20px;

  .ant-typography {
    font-size: 20px;
  }
`
const DefaultCardsWrapperSCP = styled.div`
  display: grid;
  grid-area: defaultCardsArea;
  grid-template-columns: repeat(auto-fit, 340px);
  column-gap: 30px;
  row-gap: 30px;
  justify-content: center;
`
