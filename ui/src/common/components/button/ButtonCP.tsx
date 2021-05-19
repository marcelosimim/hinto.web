import { Button, Popconfirm } from 'antd'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../context/GlobalContext'

interface IButtonCPProps {
  children: JSX.Element | string | number
  onClick: () => void
  popConfirmText?: string
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
  const globalContext = useContext(GlobalContext)

  const [showPopconfirm, setShowPopconfirm] = useState(false)

  return (
    <MainWrapperButtonSCP>
      {props.popConfirmText && (
        <Popconfirm
          title={props.popConfirmText}
          okText={'Sim'}
          overlay={true}
          cancelText={'Cancelar'}
          onCancel={() => setShowPopconfirm(false)}
          visible={showPopconfirm && globalContext.showDrawer}
          onConfirm={() => {
            setShowPopconfirm(false)
            props.onClick()
          }}
        >
          <Button
            onClick={() => setShowPopconfirm(true)}
            loading={props.loading}
            disabled={props.disabled}
            icon={props.icon}
            type={props.type}
            danger={props.danger}
          >
            {props.children}
          </Button>
        </Popconfirm>
      )}
      {!props.popConfirmText && (
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
      )}
    </MainWrapperButtonSCP>
  )
}

const MainWrapperButtonSCP = styled.div``
