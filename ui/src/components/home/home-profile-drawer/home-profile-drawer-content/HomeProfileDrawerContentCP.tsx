import axios from 'axios'
import React, { useContext } from 'react'
import styled from 'styled-components'
import ButtonCP from '../../../../common/components/button/ButtonCP'
import createNotification from '../../../../common/components/notification/createNotification'
import { NotificationTypeEnum } from '../../../../common/components/notification/enums/NotificationTypeEnum'
import { TextCPTypesEnum } from '../../../../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../../../../common/components/text/TextCP'
import UserImageCP from '../../../../common/components/user-image/UserImageCP'
import { GlobalContext } from '../../../../common/context/GlobalContext'
import HomeProfileDrawerFormCP from '../home-profile-drawer-form/HomeProfileDrawerFormCP'

interface IHomeProfileDrawerContentCPProps {
  userName: string
  userEmail: string
}

/**
 * Constrói, para a tela home, o conteúdo do drawer que permite o usuário gerenciar as suas
 * configurações de conta
 * @author rafaelvictor01
 * @author marcelosimim
 * @returns JSX.Element
 */
export default function MHomeProfileDrawerContentCP(
  props: IHomeProfileDrawerContentCPProps
): JSX.Element {
  const globalContext = useContext(GlobalContext)

  async function onClickDeleteAccount(): Promise<void> {
    console.log('onClickDeleteAccount')
    console.log('id: ', globalContext.authUser.id)
    axios
      .delete(`/usuario/${globalContext.authUser.id}`)
      .then(request => {
        if (request.status === 200) {
          createNotification({
            type: NotificationTypeEnum.success,
            title: 'Conta excluida',
            description:
              'Que pena que você tomou essa decisão... Volte quando quiser!'
          })
          return globalContext.logout()
        }
      })
      .catch(error => {
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Houve algum erro para excluir o seu usuário'
        })
        console.log(`>>> ERRO: ${error}`)
      })
  }

  async function onClickCleanHistory(): Promise<void> {
    console.log('onClickCleanHistory')
    axios
      .delete(`/favoritos/${globalContext.authUser.id}`)
      .then(request => {
        if (request.status === 200) {
          createNotification({
            type: NotificationTypeEnum.success,
            title: 'Lista esvaziada com sucesso!',
            description: ''
          })
        }
      })
      .catch(error => {
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Houve algum erro para esvaziar sua lista'
        })
        console.log(`>>> ERRO: ${error}`)
      })
  }

  /*
  async function onSubmitForm(values: IRegisterForm): Promise<void> {
    const DTO: ICreateUserRequestDTO = {
      nome: values.userName,
      email: values.email,
      senha: values.password,
      dataNascimento: values.birthDate.toLocaleString('pt-BR'),
      sexo: values.gender
    }

    axios
      .post('/usuario', DTO)
      .then(request => {
        if (request.status === 200) {
          createNotification({
            type: NotificationTypeEnum.success,
            title: 'Usuário criado com sucesso!',
            description:
              'Agora é só aproveitar tudo que a gente tem pra te oferecer'
          })
          return globalContext.login(request.data)
        }
      })
      .catch(error => {
        createNotification({
          type: NotificationTypeEnum.error,
          title: 'Ops!',
          description: 'Houve algum erro para criar o seu usuário'
        })
        console.log(`>>> ERRO: ${error}`)
      })
  }
  */

  return (
    <MainWrapperDrawerContentSCP>
      <UserImageWrapperSCP>
        <TextCP content={props.userName} />
        <UserImageCP />
        <TextCP
          content={`@ ${props.userEmail}`}
          type={TextCPTypesEnum.warning}
        />
      </UserImageWrapperSCP>
      <HomeProfileDrawerFormCP />
      <TrashButtonsWrapperSCP>
        <ButtonCP
          type={'text'}
          onClick={onClickDeleteAccount}
          danger={true}
          popConfirmText={'Tem certeza que deseja excluir sua conta'}
        >
          Excluir conta
        </ButtonCP>
        <ButtonCP
          type={'text'}
          onClick={onClickCleanHistory}
          danger={true}
          popConfirmText={
            'Tem certeza que deseja limpar o seu histórico de preferências'
          }
        >
          Limpar histórico de preferências
        </ButtonCP>
      </TrashButtonsWrapperSCP>
    </MainWrapperDrawerContentSCP>
  )
}

const MainWrapperDrawerContentSCP = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'userImage'
    'drawerForm'
    'trashButtons';
`
const UserImageWrapperSCP = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  min-width: 100%;
  grid-area: userImage;
  grid-template-columns: 1fr;
  margin-top: 20px;
`
const TrashButtonsWrapperSCP = styled.div`
  display: grid;
  grid-area: trashButtons;
  gap: 15px;
  grid-template-columns: 1fr 2fr;
`
