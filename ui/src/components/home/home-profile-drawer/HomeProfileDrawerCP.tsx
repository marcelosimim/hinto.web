import React, { useContext } from 'react'
import styled from 'styled-components'
import DrawerCP from '../../../common/components/drawer/DrawerCP'
import { GlobalContext } from '../../../common/context/GlobalContext'
import HomeProfileDrawerContentCP from './home-profile-drawer-content/HomeProfileDrawerContentCP'

/**
 * Agrupa todo o conteúdo referente ao drawer que permite o usuário gerenciar a sua conta na tela
 * principal do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HomeProfileDrawerCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)
  return (
    <MainWrapperHomeProfileDrawerSCP>
      <DrawerCP
        visible={globalContext.showDrawer}
        onClose={() => globalContext.setShowDrawer(false)}
        title={'Configurações de perfil'}
      >
        <HomeProfileDrawerContentCP
          userName={globalContext.authUser.nome}
          userEmail={globalContext.authUser.email}
        />
      </DrawerCP>
    </MainWrapperHomeProfileDrawerSCP>
  )
}

const MainWrapperHomeProfileDrawerSCP = styled.div``
