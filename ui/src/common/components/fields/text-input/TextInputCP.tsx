import { Input } from 'antd'
import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import TextInputLabelICP from './inner/TextInputLabelICP'

interface ITextInputCPProps {
  name: string
  label: string
  isRequired?: boolean
  value?: string | number
  type?: string
  placeholder?: string
  onChange: {
    (e: React.ChangeEvent<any>): void
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void
  }
  onBlur?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: FocusEvent<any>): void
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
  }
}

/**
 * Componente de input de texto criado, sobretudo, para funcionar em formulários criados
 * pelo Formik mas usa as props do Input do antd.
 *
 * @see https://ant.design
 * @param props ITextInputCPProps
 * @returns JSX.Element
 * @author rafaelvictor01
 * @todo Melhorar este componente quando der tempo
 */
export default function TextInputCP(props: ITextInputCPProps): JSX.Element {
  return (
    <MainWrapperTextInputSCP>
      <TextInputLabelICP label={props.label} isRequired={props.isRequired} />
      <Input
        name={props.name}
        type={props.type}
        required={props.isRequired}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </MainWrapperTextInputSCP>
  )
}

const MainWrapperTextInputSCP = styled.div`
  display: grid;
  .ant-input {
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    height: ${props => props.theme.defaultSize.inputFieldHeight};
    color: ${props => props.theme.colors.mainTextColor};
    border-radius: ${props => props.theme.other.defaultBorderRadius};
    background-color: ${props => props.theme.colors.mainBackground};
  }
`
