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

  async function addToMyList(): Promise<void> {
    setLoading(true)
    axios
      .put(
        `/favoritos/${globalContext.authUser.id}/${globalContext.movieIDToModal}`
      )
      .then(request => {
        if (request.status === 200) {
          createNotification({
            type: NotificationTypeEnum.success,
            title: 'Oba!',
            description: 'Mídia adicionada a sua lista com sucesso 😊.'
          })
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description:
            'Encontramos algum erro ao tentar adicionar esta mídia a sua lista.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }

  async function removeFavorite(): Promise<void> {
    axios
      .delete(
        `/favoritos/${globalContext.authUser.id}/${globalContext.movieIDToModal}`
      )
      .then(request => {
        if (request.status === 200) {
          createNotification({
            type: NotificationTypeEnum.success,
            title: 'Sucesso!',
            description: 'Mídia removida da sua lista com sucesso 😊.'
          })
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description:
            'Encontramos algum erro ao tentar remover esta mídia da sua lista.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }

  async function setLike(): Promise<void> {
    axios
      .put(
        `/lista/${globalContext.authUser.id}/${globalContext.movieIDToModal}`
      )
      .then(request => {
        if (request.status === 200) {
          createNotification({
            type: NotificationTypeEnum.success,
            title: 'Oba!',
            description: 'Mídia curtida com sucesso 😊.'
          })
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Encontramos algum erro ao tentar curtir esta mídia.'
        })
        return console.log(`>>> ERRO: ${error}`)
      })
  }

  return (
    <MainWrapperHomeMovieDetailsModalSCP>
      <ModalCP
        visible={globalContext.showModal}
        onClose={globalContext.closeMovieDetailsModal}
        customFooter={[
          <FooterWrapperSCP key={1}>
            <ButtonWrapperSCP>
<<<<<<< HEAD
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
=======
              <ButtonCP onClick={setLike}>Like! ❤</ButtonCP>
>>>>>>> 0bfe157191681f3315897626b1f53f3575758e27
            </ButtonWrapperSCP>
            {globalContext.currentTab !== 'MINHA LISTA' && (
              <ButtonWrapperSCP>
                <ButtonCP onClick={addToMyList}>Add na minha lista</ButtonCP>
              </ButtonWrapperSCP>
            )}
            {globalContext.currentTab === 'MINHA LISTA' && (
              <ButtonWrapperSCP>
                <ButtonCP onClick={removeFavorite}>
                  Remover da minha lista
                </ButtonCP>
              </ButtonWrapperSCP>
            )}
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
