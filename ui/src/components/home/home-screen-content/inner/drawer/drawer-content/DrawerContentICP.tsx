import React from 'react'
import styled from 'styled-components'
import ButtonCP from '../../../../../../common/components/button/ButtonCP'
import { TextCPTypesEnum } from '../../../../../../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../../../../../../common/components/text/TextCP'
import UserImageCP from '../../../../../../common/components/user-image/UserImageCP'
import DrawerFormICP from '../drawer-form/DrawerFormICP'

interface IDrawerContentICPProps {
  userName: string
  userEmail: string
}

/**
 * Constrói o conteúdo do drawer que permite o usuário gerenciar as suas configurações de conta
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function DrawerContentICP(
  props: IDrawerContentICPProps
): JSX.Element {
  function onClickDeleteAccount(): void {
    console.log('onClickDeleteAccount')
  }

  function onClickCleanHistory(): void {
    console.log('onClickCleanHistory')
  }
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
      <DrawerFormICP />
      <TrashButtonsWrapperSCP>
        <ButtonCP type={'text'} onClick={onClickDeleteAccount} danger={true}>
          Excluir conta
        </ButtonCP>
        <ButtonCP type={'text'} onClick={onClickCleanHistory} danger={true}>
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
