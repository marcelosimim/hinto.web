import { Dropdown, Menu } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import styled from 'styled-components'
import LoginImageSRC from '../../../../assets/LoginImage.svg'
import { TextCPTypesEnum } from '../../text/enums/TextCPTypesEnum'
import TextCP from '../../text/TextCP'

interface IHeaderOptionsForUsersICPProps {
  onClickExit: () => void
  onClickShowProfile: () => void
}

/** Cria os itens a serem exibidos no dropdown do menu */
function renderMenuItens(props: IHeaderOptionsForUsersICPProps): JSX.Element {
  return (
    <Menu>
      <Menu.Item onClick={props.onClickShowProfile}>
        <TextCP content={'Meu perfil'} />
      </Menu.Item>
      <Menu.Item onClick={props.onClickExit}>
        <TextCP content={'Sair'} type={TextCPTypesEnum.danger} />
      </Menu.Item>
    </Menu>
  )
}

/**
 * Cria o conteúdo à esquerda do header da aplicação para as rotas que exigem login.
 *
 * @author rafaelvictor01
 * @param props IHeaderOptionsForUsersICPProps
 * @returns JSX.Element
 * @todo criar um DropdownCP, um MenuCP, um MenuItemICP e um AvatarCP
 */
export default function HeaderOptionsForUsersICP(
  props: IHeaderOptionsForUsersICPProps
): JSX.Element {
  return (
    <MainWrapperHeaderOptionsSCP>
      <Dropdown overlay={renderMenuItens(props)} trigger={['click']}>
        <Avatar alt={'avatar-img'} shape={'circle'} src={LoginImageSRC} />
      </Dropdown>
    </MainWrapperHeaderOptionsSCP>
  )
}

const MainWrapperHeaderOptionsSCP = styled.div`
  display: flex;
  flex-direction: row;

  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover {
    border-radius: 18px;
    background-color: green !important;
  }
`
