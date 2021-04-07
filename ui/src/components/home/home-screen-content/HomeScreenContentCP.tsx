import React from 'react'
import styled from 'styled-components'
import TabsCP from '../../../common/components/tabs/TabsCP'
import { HomeScreenContentTabsICP } from './inner/HomeScreenContentTabsICP'

export default function HomeScreenContentCP(): JSX.Element {
  return (
    <MainWrapperHomeScreenContentSCP>
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
