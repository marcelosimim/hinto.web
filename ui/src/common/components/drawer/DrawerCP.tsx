import { Drawer } from 'antd'
import React from 'react'

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
 * Componente de drawer do sistema
 * @author rafaelvictor01
 * @param props IDrawerCPProps
 * @returns JSX.Element
 */
export default function DrawerCP(props: IDrawerCPProps): JSX.Element {
  return (
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
  )
}
