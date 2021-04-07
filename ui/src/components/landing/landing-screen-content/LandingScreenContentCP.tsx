import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
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
      <LandingTopTextCP />
      <Row gutter={[16, 16]} justify={'center'}>
        <Col className={'gutter-row'} span={7}>
          <LandingCardCP
            main={true}
            synopsis={MOCK[0].synopsis}
            movieTitle={MOCK[0].movieTitle}
            urlImage={MOCK[0].urlImage}
          />
        </Col>
        <Col className={'gutter-row'} span={14}>
          <Row justify={'center'}>
            <Col>
              <HintoTextCP />
              <Row>
                <BottomTextWrapperSCP>
                  <TextCP
                    content={
                      'Gosta de filmes, séries e animes? Vem criar com a gente sua própria biblioteca com tudo isso! Na Hinto vamos te ajudar a tomar as melhores decisões para o meu momento de lazer ser cada vez melhor!'
                    }
                  />
                </BottomTextWrapperSCP>
              </Row>
            </Col>
          </Row>
          <Row gutter={[16, 16]} justify={'space-between'}>
            <Col className={'gutter-row'}>
              <LandingCardCP
                synopsis={MOCK[1].synopsis}
                movieTitle={MOCK[1].movieTitle}
                urlImage={MOCK[1].urlImage}
              />
            </Col>
            <Col className={'gutter-row'}>
              <LandingCardCP
                synopsis={MOCK[2].synopsis}
                movieTitle={MOCK[2].movieTitle}
                urlImage={MOCK[2].urlImage}
              />
            </Col>
            <Col className={'gutter-row'}>
              <LandingCardCP
                synopsis={MOCK[3].synopsis}
                movieTitle={MOCK[3].movieTitle}
                urlImage={MOCK[3].urlImage}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </MainWrapperLandingScreenContentSCP>
  )
}

const MainWrapperLandingScreenContentSCP = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`
const BottomTextWrapperSCP = styled.div`
  font-size: 20px;
  max-width: 800px;
  border-bottom: 2px solid ${props => props.theme.colors.headerAndFooterDivisor};
  padding-bottom: 20px;
  margin-bottom: 20px;
`
