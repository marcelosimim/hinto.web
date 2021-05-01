import { Drawer } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IDrawerCPProps {
  visible: boolean
  children: JSX.Element
  onClose: () => void
  title?: string
  placement?: 'right' | 'top' | 'bottom' | 'left'
  closable?: boolean
  mask?: boolean
  width?: string | number
  maskClosable?: boolean
}

/**
 * Abstrai a criação de um componente de drawer personalizado para o sistema
 * @author rafaelvictor01
 * @param props IDrawerCPProps
 * @returns JSX.Element
 */
export default function DrawerCP(props: IDrawerCPProps): JSX.Element {
  return (
    <MainWrapperDrawerSCP>
      <Drawer
        title={props.title}
        onClose={props.onClose}
        visible={props.visible}
        mask={props.mask || true}
        width={props.width || 400}
        closable={props.closable || true}
        placement={props.placement || 'right'}
        maskClosable={props.maskClosable || true}
      >
        {props.children}
      </Drawer>
    </MainWrapperDrawerSCP>
  )
}

const MainWrapperDrawerSCP = styled.div`
  .ant-drawer-content {
    background-color: ${props => props.theme.colors.card} !important;
  }
`
