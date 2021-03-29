import { Card } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface ICardCPProps {
  children: JSX.Element | string
  style?: React.CSSProperties
}

/**
 * Principal componente de Card do sistema. Criado a princípio apenas com as props essenciais.
 *
 * Para melhora-lo:
 * @see https://ant.design
 *
 * OBS: definir height na prop style pode quebrar a tela. Cuidado
 *
 * @param props ICardCPProps
 * @returns JSX.Element
 * @author rafaelvictor01
 */
export default function CardCP(props: ICardCPProps): JSX.Element {
  return (
    <MainWrapperCardSCP>
      <Card style={props.style}>{props.children}</Card>
    </MainWrapperCardSCP>
  )
}

const MainWrapperCardSCP = styled.div`
  .ant-card {
    padding: 0;
    border: none;
    border-radius: ${props => props.theme.other.defaultBorderRadius};
    background-color: ${props => props.theme.colors.card};
  }
`
