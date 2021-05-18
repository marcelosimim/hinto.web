import { Col, Spin } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import createNotification from '../../../../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../../../../common/components/notification/enums/NotificationTypeEnum'
import { GlobalContext } from '../../../../../../common/context/GlobalContext'
import HomeMovieCardCP from '../../../../home-movie-card/HomeMovieCardCP'

/**
 * Constrói a tab com a lista de recomendações de filmes para o usuário
 *
 * @todo Abstrair os componentes Col e Row para não usar nada do antd diretamente aqui (Baixo impacto pra muito esforço. Deixar pra depois)
 *
 * @author rafaelvictor01
 * @author DrokeRavens
 * @returns JSX.Element
 */
export default function RecommendationsTabCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)

  const [listOfCards, setListOfCards] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    whenRender()
  }, [])

  async function whenRender(): Promise<void> {
    setLoading(true)
    globalContext.axiosRecommendation
      .get(`/recommendation/${globalContext.authUser.id}`)
      .then(request => {
        if (request.status === 200) {
          setListOfCards(
            request.data.map((currentMovie, index) => (
              <Col className={'gutter-row'} key={index}>
                <HomeMovieCardCP
                  movieID={currentMovie.id}
                  urlImage={currentMovie.imagemURL}
                  movieTitle={currentMovie.titulo}
                  synopsis={currentMovie.sinopse}
                  onClick={(movieID: number) =>
                    globalContext.openMovieDetailsModal(movieID)
                  }
                />
              </Col>
            ))
          )
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Tivemos algum erro ao procurar recomendações.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }

  return (
    <MainWrapperRecommendationsTabSCP>
      {loading ? (
        <Spin />
      ) : (
        <ContentWrapperRecommendationsTabSCP>
          {listOfCards}
        </ContentWrapperRecommendationsTabSCP>
      )}
    </MainWrapperRecommendationsTabSCP>
  )
}

const MainWrapperRecommendationsTabSCP = styled.div`
  .ant-pagination {
    margin: 20px;
  }
  .ant-spin-spinning {
    position: static;
    display: flex;
    justify-content: center;
    margin-top: 18%;
    opacity: 1;
  }
`
const ContentWrapperRecommendationsTabSCP = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  justify-content: center;
  justify-items: center;
`
