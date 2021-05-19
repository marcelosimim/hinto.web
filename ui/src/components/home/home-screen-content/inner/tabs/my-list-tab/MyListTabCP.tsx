import { Col, Spin } from 'antd'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import EmptyCP from '../../../../../../common/components/empty/EmptyCP'
import createNotification from '../../../../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../../../../common/components/notification/enums/NotificationTypeEnum'
import { GlobalContext } from '../../../../../../common/context/GlobalContext'
import { IMovieResponseDTO } from '../../../../../../interfaces/dtos/response/IMovieResponseDTO'
import HomeMovieCardCP from '../../../../home-movie-card/HomeMovieCardCP'

/**
 * Constrói a tab com a lista de filmes do usuário
 *
 * @todo Abstrair os componentes Col e Row para não usar nada do antd diretamente aqui (Baixo impacto pra muito esforço. Deixar pra depois)
 *
 * @author rafaelvictor01
 * @author DrokeRavens
 * @returns JSX.Element
 */
export default function IMyListResponseDTOMyListTabCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)

  const [listOfCards, setListOfCards] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    onMount()
    globalContext.setCurrentTab('myList')
  }, [])

  async function onMount(): Promise<void> {
    setLoading(true)
    axios
      .get(`/favoritos/${globalContext.authUser.id}`)
      .then(request => {
        if (request.status === 200) {
          setListOfCards(
            request.data.midias !== []
              ? request.data.midias.map(
                  (currentMovie: IMovieResponseDTO, index: number) => (
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
                  )
                )
              : []
          )
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Tivemos algum erro ao procurar sua lista de filmes.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }

  if (isLoading) {
    return (
      <MainWrapperMyListTabSCP>
        <Spin />
      </MainWrapperMyListTabSCP>
    )
  }

  return (
    <MainWrapperMyListTabSCP>
      {listOfCards.length === 0 ? (
        <EmptyCP />
      ) : (
        <ContentWrapperMyListTabSCP>{listOfCards}</ContentWrapperMyListTabSCP>
      )}
    </MainWrapperMyListTabSCP>
  )
}

const MainWrapperMyListTabSCP = styled.div`
  .ant-spin-spinning {
    position: static;
    display: flex;
    justify-content: center;
    margin-top: 18%;
    opacity: 1;
  }
`
const ContentWrapperMyListTabSCP = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  justify-content: center;
  justify-items: center;
`
