import React from 'react'
import styled from 'styled-components'
import FooterCP from '../footer/FooterCP'
import HeaderCP from '../header/HeaderCP'

interface ILayoutCPProps {
  content: JSX.Element
  headerOptions: JSX.Element
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
      <HeaderCP options={props.headerOptions} />
      <ContentWrapperLayoutSCP>{props.content}</ContentWrapperLayoutSCP>
      <FooterCP />
    </MainWrapperLayoutSCP>
  )
}

const MainWrapperLayoutSCP = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vmin;
`
const ContentWrapperLayoutSCP = styled.div`
  height: 100vmin;
  padding: 25px;
`
