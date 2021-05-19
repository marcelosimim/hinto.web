import { Spin } from 'antd'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ButtonCP from '../../../common/components/button/ButtonCP'
import ModalCP from '../../../common/components/modal/ModalCP'
import createNotification from '../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../common/components/notification/enums/NotificationTypeEnum'
import { GlobalContext } from '../../../common/context/GlobalContext'
import HomeMovieDetailsModalContentCP from './home-movie-details-modal-content/HomeMovieDetailsModalContentCP'

/**
 * Agrupa todo o conteúdo referente ao modal que permite o usuário observar detalhes de um filme na
 * tela principal do sistema
 * @todo precisa melhorar quase tudo neste componente. Ele esta feio
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HomeMovieDetailsModalCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)

  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    if (globalContext.movieIDToModal !== null) {
      getMovieDetails()
    }
  }, [globalContext.movieIDToModal])

  async function getMovieDetails(): Promise<void> {
    setLoading(true)
    axios
      .get(`/midia/${globalContext.movieIDToModal}`)
      .then(request => {
        if (request.status === 200) {
          setMovieData(request.data)
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description:
            'Houve algum erro ao procurar pelos detalhes deste filme.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }

  async function setFavorite(): Promise<void> {
    axios.put(
      `/favoritos/${globalContext.authUser.id}/${globalContext.movieIDToModal}`
    )
  }

  async function removeFavorite(): Promise<void> {
    axios.delete(
      `/favoritos/${globalContext.authUser.id}/${globalContext.movieIDToModal}`
    )
  }

  async function setLike(): Promise<void> {
    axios.put(
      `/lista/${globalContext.authUser.id}/${globalContext.movieIDToModal}`
    )
  }

  return (
    <MainWrapperHomeMovieDetailsModalSCP>
      <ModalCP
        visible={globalContext.showModal}
        onClose={globalContext.closeMovieDetailsModal}
        customFooter={[
          <FooterWrapperSCP key={1}>
            <ButtonWrapperSCP>
              <ButtonCP onClick={() => setLike()}>Like! ❤</ButtonCP>
            </ButtonWrapperSCP>
            <ButtonWrapperSCP>
              <ButtonCP onClick={() => setFavorite()}>
                Add na minha lista
              </ButtonCP>
            </ButtonWrapperSCP>
            <ButtonWrapperSCP>
              <ButtonCP onClick={() => removeFavorite()}>
                Remover da minha lista
              </ButtonCP>
            </ButtonWrapperSCP>
          </FooterWrapperSCP>
        ]}
        width={750}
        title={'Confira os detalhes deste filme'}
      >
        {!loading && movieData ? (
          <HomeMovieDetailsModalContentCP {...movieData} />
        ) : (
          <Spin />
        )}
      </ModalCP>
    </MainWrapperHomeMovieDetailsModalSCP>
  )
}

const MainWrapperHomeMovieDetailsModalSCP = styled.div`
  .ant-spin-spinning {
    position: static;
    display: flex;
    justify-content: center;
    margin-top: 18%;
    opacity: 1;
  }
`
const FooterWrapperSCP = styled.div`
  display: flex;
`
const ButtonWrapperSCP = styled.div`
  margin-right: 10px;
`
