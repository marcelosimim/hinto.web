import { Col, Spin } from 'antd'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import createNotification from '../../../../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../../../../common/components/notification/enums/NotificationTypeEnum'
import SearchAreaCP from '../../../../../../common/components/search-area/SearchAreaCP'
import { GlobalContext } from '../../../../../../common/context/GlobalContext'
import { IMovieResponseDTO } from '../../../../../../interfaces/dtos/response/IMovieResponseDTO'
import HomeMovieCardCP from '../../../../home-movie-card/HomeMovieCardCP'

/**
 * Constrói a tela de busca para o usuário
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function SearchTabCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)

  const [listOfCards, setListOfCards] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => globalContext.setCurrentTab('search'), [])

  async function onSearch(value: string): Promise<void> {
    if (!!value && value !== '') {
      setLoading(true)
      axios
        .get(`/midia/buscar/${value}`)
        .then(request => {
          if (request.status === 200) {
            setLoading(false)
            return setListOfCards(
              request.data.map(
                (currentMovie: IMovieResponseDTO, index: number) => {
                  if (index < 4) {
                    return (
                      <Col className={'gutter-row'} key={index}>
                        <HomeMovieCardCP
                          movieID={currentMovie.id}
                          urlImage={currentMovie.imagemURL}
                          movieTitle={currentMovie.titulo}
                          onClick={(movieID: number) =>
                            globalContext.openMovieDetailsModal(movieID)
                          }
                          synopsis={`${currentMovie.sinopse} ...`}
                        />
                      </Col>
                    )
                  }
                  return null
                }
              )
            )
          }
        })
        .catch(error => {
          setLoading(false)
          createNotification({
            type: NotificationTypeEnum.error,
            title: 'Ops!',
            description: 'Tivemos algum erro para identificar o seu usuário'
          })
          return console.log(`>>> ERRO: ${error}`)
        })
    }
  }

  return (
    <MainWrapperSearchTabSCP>
      <SearchAreaCP
        placeholder={'Busque pelo seu filme favorito'}
        onSearch={onSearch}
        loading={loading}
      />
      {loading ? <Spin /> : <CardsWrapperSCP>{listOfCards}</CardsWrapperSCP>}
    </MainWrapperSearchTabSCP>
  )
}

const MainWrapperSearchTabSCP = styled.div`
  align-content: center;
  .ant-card-meta {
    margin: -15px 0;
  }
  .ant-spin-spinning {
    position: static;
    display: flex;
    justify-content: center;
    margin-top: 18%;
    opacity: 1;
  }
`
const CardsWrapperSCP = styled.div`
  padding-top: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(340px, 1fr));
  justify-content: center;
  justify-items: center;
`
