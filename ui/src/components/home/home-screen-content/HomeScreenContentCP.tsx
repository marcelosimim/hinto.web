import React from 'react'
import styled from 'styled-components'
import TabsCP from '../../../common/components/tabs/TabsCP'
import HomeMovieDetailsModalCP from '../home-movie-details-modal/HomeMovieDetailsModalCP'
import HomeProfileDrawerCP from '../home-profile-drawer/HomeProfileDrawerCP'
import { HomeScreenContentTabsICP } from './inner/tabs/HomeScreenContentTabsICP'

/**
 * Agrupa todo o conteúdo da tela principal do sistema.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HomeScreenContentCP(): JSX.Element {
  return (
    <MainWrapperHomeScreenContentSCP>
      <HomeProfileDrawerCP />
      <HomeMovieDetailsModalCP />
      <TabsCP tabs={HomeScreenContentTabsICP} />
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
