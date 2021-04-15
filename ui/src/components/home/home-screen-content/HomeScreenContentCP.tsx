import React, { useContext } from 'react'
import styled from 'styled-components'
import DrawerCP from '../../../common/components/drawer/DrawerCP'
import TabsCP from '../../../common/components/tabs/TabsCP'
import { GlobalContext } from '../../../common/context/GlobalContext'
import { HomeScreenContentTabsICP } from './inner/HomeScreenContentTabsICP'

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
      >
        <>este é um bom drawer</>
      </DrawerCP>
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
