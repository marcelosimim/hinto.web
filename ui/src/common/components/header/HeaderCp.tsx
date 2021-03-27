import React from 'react'
import styled from 'styled-components'
interface IHeaderCPProps {
  options: JSX.Element
}

/**
 * Monta o componente com o header principal do sistema
 * @param props IHeaderCPProps
 * @returns JSX.Element
 * @author rafaelvictor01
 * @todo implementar a logo
 */
export default function HeaderCP(props: IHeaderCPProps): JSX.Element {
  return (
    <MainWrapperHeaderCP>
      <WrapperHeaderCP>
        <LogoWrapper></LogoWrapper>
        <OptionsWrapper>{props.options}</OptionsWrapper>
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
