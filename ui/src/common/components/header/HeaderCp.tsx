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
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: ${props => props.theme.colors.header};
  border-bottom: 2px solid ${props => props.theme.colors.headerDivisor};
  top: 0;
  right: 0;
  left: 0;
  z-index: ${props => props.theme.zIndex.header};
`
const WrapperHeaderCP = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`
const LogoWrapper = styled.img``
const OptionsWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
`
