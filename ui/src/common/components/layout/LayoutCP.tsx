import React from 'react'
import styled from 'styled-components'
import HeaderCP from '../header/HeaderCp'

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
    </MainWrapperLayoutSCP>
  )
}

const MainWrapperLayoutSCP = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding: 70px;
`
const ContentWrapperLayoutSCP = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding: 70px;
`
