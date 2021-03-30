import React from 'react'
import styled from 'styled-components'
import { SystemRoutes } from '../../../routes/SystemRoutes'
import { TextForHeaderItemsEnum } from '../enums/TextForHeaderItemsEnum'
import HeaderOptionICP from './HeaderOptionICP'

export default function HeaderOptionsWithoutLoginCP(): JSX.Element {
  return (
    <HeaderOptionsSCP>
      <HeaderOptionICP
        href={SystemRoutes.routeToLandingScreen}
        text={TextForHeaderItemsEnum.textToLandingScreen}
      />
      <HeaderOptionICP
        href={SystemRoutes.routeToLoginScreen}
        text={TextForHeaderItemsEnum.textToLoginScreen}
      />
      <HeaderOptionICP
        href={SystemRoutes.routeToRegisterScreen}
        text={TextForHeaderItemsEnum.textToRegisterScreen}
      />
    </HeaderOptionsSCP>
  )
}

const HeaderOptionsSCP = styled.div`
  display: flex;
  flex-direction: row;
`
