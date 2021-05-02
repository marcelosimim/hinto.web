import { Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IModalCPProps {
  children: JSX.Element | string | number
  visible: boolean
  onClose: () => void
  onOk?: () => void
  title?: string
  width?: string | number
  cancelText?: string
  okText?: string
  customFooter?: JSX.Element[]
}

/**
 * Abstrai a criação de um componente de modal personalizado para a aplicação
 * @author rafaelvictor01
 * @param props IModalCPProps
 * @returns JSX.Element
 */
export default function ModalCP(props: IModalCPProps): JSX.Element {
  return (
    <MainWrapperModalSCP>
      <Modal
        visible={props.visible}
        onCancel={props.onClose}
        onOk={props.onOk}
        title={props.title}
        footer={props.customFooter}
        cancelText={props.cancelText}
        okText={props.okText}
        width={props.width}
        maskClosable={true}
        destroyOnClose={true}
        centered={true}
        mask={true}
      >
        {props.children}
      </Modal>
    </MainWrapperModalSCP>
  )
}

const MainWrapperModalSCP = styled.div`
  .ant-modal-footer {
    border-top: 0px solid red !important;
  }
`
