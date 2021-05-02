import React, { useContext } from 'react'
import styled from 'styled-components'
import DrawerCP from '../../../common/components/drawer/DrawerCP'
import ModalCP from '../../../common/components/modal/ModalCP'
import TabsCP from '../../../common/components/tabs/TabsCP'
import { GlobalContext } from '../../../common/context/GlobalContext'
import HomeProfileDrawerContentCP from '../home-profile-drawer/home-profile-drawer-content/HomeProfileDrawerContentCP'
import { HomeScreenContentTabsICP } from './inner/tabs/HomeScreenContentTabsICP'

/**
 * Agrupa todo o conteúdo da tela principal do sistema.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HomeScreenContentCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)
  return (
    <MainWrapperHomeScreenContentSCP>
      <DrawerCP
        visible={globalContext.showDrawer}
        onClose={() => globalContext.setShowDrawer(false)}
        title={'Configurações de perfil'}
      >
        <HomeProfileDrawerContentCP
          userName={'Rafael Victor Araujo'}
          userEmail={'rafaelvictor.bernardes@gmail.com'}
        />
      </DrawerCP>
      <ModalCP
        visible={globalContext.showModal}
        onClose={globalContext.closeMovieDetailsModal}
        customFooter={[]}
      >
        {globalContext.movieIDToModal}
      </ModalCP>
      <TabsCP defaultActiveKey={'1'} tabs={HomeScreenContentTabsICP} />
    </MainWrapperHomeScreenContentSCP>
  )
}

const MainWrapperHomeScreenContentSCP = styled.div`
  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
  }
`
