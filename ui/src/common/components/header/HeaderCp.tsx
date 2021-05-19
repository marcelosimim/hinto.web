import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../context/GlobalContext'
import { SystemRoutes } from '../../routes/SystemRoutes'
import HeaderOptionsForUsersICP from './inner/HeaderOptionsForUsersICP'
import HeaderOptionsWithoutLoginCP from './inner/HeaderOptionsWithoutLoginICP'

interface IHeaderCPProps {
  currentRoute: string
}

/**
 * Monta o componente com o header principal do sistema
 * @param props IHeaderCPProps
 * @returns JSX.Element
 * @author rafaelvictor01
 */
export default function HeaderCP(props: IHeaderCPProps): JSX.Element {
  const globalContext = useContext(GlobalContext)
  useEffect(checkCurrentRoute, [props.currentRoute])

  const [
    enableHeaderOptionsWithoutLogin,
    setEnableHeaderOptionsWithoutLogin
  ] = useState(false)

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
          {!enableHeaderOptionsWithoutLogin &&
            globalContext.authUser != null && <HeaderOptionsForUsersICP />}
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
