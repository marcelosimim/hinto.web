import React from 'react'
import styled from 'styled-components'
import FooterCP from '../footer/FooterCP'
import HeaderCP from '../header/HeaderCp'
interface ILayoutCPProps {
  content: JSX.Element
  currentRoute: string
}

/**
 * Componente usado para abstrair a criação de todas as telas do sistema
 * @param props ILayoutCPProps
 * @returns JSX.Element
 * @author rafaelvictor01
 */
export function LayoutCP(props: ILayoutCPProps): JSX.Element {
  return (
    <MainWrapperLayoutSCP>
      <HeaderCP currentRoute={props.currentRoute} />
      <ContentWrapperLayoutSCP>{props.content}</ContentWrapperLayoutSCP>
      <FooterCP />
    </MainWrapperLayoutSCP>
  )
}

const MainWrapperLayoutSCP = styled.div``
const ContentWrapperLayoutSCP = styled.div`
  min-height: calc(100vh - 6.4em);
  padding: 25px;
`
