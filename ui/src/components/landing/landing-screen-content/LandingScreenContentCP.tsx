import React from 'react'
import styled from 'styled-components'
import TextCP from '../../../common/components/text/TextCP'
import HintoTextCP from '../../../common/components/hinto-text/HintoTextCP'
import LandingCardCP from '../landing-card/LandingCardCP'
import LandingTopTextCP from '../landing-top-text/LandingTopTextCP'
import { LandingScreenContentMock } from '../../../mocks/LandingScreenContentMock'
import { ILandingScreenResponseDTO } from '../../../interfaces/dtos/response/ILandingScreenResponseDTO'

const MOCK: ILandingScreenResponseDTO[] = LandingScreenContentMock

/**
 * Conteúdo da tela de apresentação do sistema
 *
 * @todo Abstrair os componentes Col e Row para não usar nada do antd diretamente aqui - Baixo impacto pra muito esforço... deixar pra depois
 *
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingScreenContentCP(): JSX.Element {
  return (
    <MainWrapperLandingScreenContentSCP>
      <LandingTopTextSCP>
        <LandingTopTextCP />
      </LandingTopTextSCP>

      <MainCardWrapperSCP>
        <LandingCardCP
          main={true}
          synopsis={MOCK[0].synopsis}
          movieTitle={MOCK[0].movieTitle}
          urlImage={MOCK[0].urlImage}
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
          <LandingCardCP
            synopsis={MOCK[1].synopsis}
            movieTitle={MOCK[1].movieTitle}
            urlImage={MOCK[1].urlImage}
          />

          <LandingCardCP
            synopsis={MOCK[2].synopsis}
            movieTitle={MOCK[2].movieTitle}
            urlImage={MOCK[2].urlImage}
          />

          <LandingCardCP
            synopsis={MOCK[3].synopsis}
            movieTitle={MOCK[3].movieTitle}
            urlImage={MOCK[3].urlImage}
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
