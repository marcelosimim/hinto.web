import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { TextCPTypesEnum } from './enums/TextCPTypesEnum'

interface ITextCPProps {
  content: string
  title?: boolean
  strong?: boolean
  copyable?: boolean
  disabled?: boolean
  underline?: boolean
  type?: TextCPTypesEnum
  onChange?: (currentContent: string) => void
}

/**
 * Componente padrão de texto para o sistema
 * @param props ITextCPProps
 * @returns { JSX.Element }
 * @author rafaelvictor01
 */
export default function TextCP(props: ITextCPProps): JSX.Element {
  return (
    <MainWrapperTextSCP>
      {props.title && (
        <Typography.Title
          type={props.type}
          underline={props.underline}
          copyable={props.copyable}
          disabled={props.disabled}
        >
          {props.content}
        </Typography.Title>
      )}
      {!props.title && (
        <Typography.Text
          type={props.type}
          strong={props.strong}
          underline={props.underline}
          copyable={props.copyable}
          disabled={props.disabled}
        >
          {props.content}
        </Typography.Text>
      )}
    </MainWrapperTextSCP>
  )
}

const MainWrapperTextSCP = styled.div`
  .ant-typography {
    color: ${props => props.theme.colors.mainTextColor};
  }
  .ant-typography.ant-typography-secondary {
    color: ${props => props.theme.colors.secondary};
  }
  .ant-typography.ant-typography-danger {
    color: ${props => props.theme.colors.redError};
  }
  .ant-typography.ant-typography-success {
    color: ${props => props.theme.colors.greenSuccess};
  }
  .ant-typography.ant-typography-warning {
    color: ${props => props.theme.colors.yellowAlert};
  }
`
