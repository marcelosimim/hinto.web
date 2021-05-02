import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IButtonCPProps {
  children: JSX.Element | string | number
  onClick: () => void

  loading?: boolean
  disabled?: boolean
  danger?: boolean
  icon?: JSX.Element
  type?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed'
}

/**
 * Abstrai a criação de um componente botão personalizado para o sistema
 * @author rafaelvictor01
 * @param props IButtonCPProps
 * @returns JSX.Element
 */
export default function ButtonCP(props: IButtonCPProps): JSX.Element {
  return (
    <MainWrapperButtonSCP>
      <Button
        onClick={props.onClick}
        loading={props.loading}
        disabled={props.disabled}
        icon={props.icon}
        type={props.type}
        danger={props.danger}
      >
        {props.children}
      </Button>
    </MainWrapperButtonSCP>
  )
}

const MainWrapperButtonSCP = styled.div``
