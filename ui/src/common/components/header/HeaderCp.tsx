import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SystemRoutes } from '../../routes/SystemRoutes'
import HeaderOptionsWithoutLoginCP from './inner/HeaderOptionsWithoutLoginICP'

interface IHeaderCPProps {
  currentRoute: string
}

/**
 * Monta o componente com o header principal do sistema
 * @param props IHeaderCPProps
 * @returns JSX.Element
 * @author rafaelvictor01
 * @todo implementar a logo
 * @todo implementar a forma como serão as options dentro do sistema
 */
export default function HeaderCP(props: IHeaderCPProps): JSX.Element {
  const [
    enableHeaderOptionsWithoutLogin,
    setEnableHeaderOptionsWithoutLogin
  ] = useState(false)

  useEffect(checkCurrentRoute, [props.currentRoute])

  function checkCurrentRoute(): void {
    setEnableHeaderOptionsWithoutLogin(
      props.currentRoute === SystemRoutes.routeToLandingScreen ||
        props.currentRoute === SystemRoutes.routeToLoginScreen ||
        props.currentRoute === SystemRoutes.routeToRegisterScreen
    )
  }

  return (
    <MainWrapperHeaderCP>
      <WrapperHeaderCP>
        <LogoWrapper></LogoWrapper>
        <OptionsWrapper>
          {enableHeaderOptionsWithoutLogin && <HeaderOptionsWithoutLoginCP />}
          {!enableHeaderOptionsWithoutLogin && <>aqui é dentro do sistema</>}
        </OptionsWrapper>
      </WrapperHeaderCP>
    </MainWrapperHeaderCP>
  )
}

const MainWrapperHeaderCP = styled.div`
  background-color: ${props => props.theme.colors.headerAndFooter};
  border-bottom: 2px solid ${props => props.theme.colors.headerAndFooterDivisor};
  height: ${props => props.theme.defaultSize.headerAndFooter};
  z-index: ${props => props.theme.zIndex.headerAndFooter};
`
const WrapperHeaderCP = styled.div`
  display: flex;
  height: 100%;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
`
const OptionsWrapper = styled.div`
  display: flex;
`
const LogoWrapper = styled.img``
