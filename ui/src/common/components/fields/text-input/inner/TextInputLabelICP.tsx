import React from 'react'
import styled from 'styled-components'

interface ITextInputLabelICPProps {
  label: string
  isRequired?: boolean
}

/**
 * Componente personalizado para a label de inputs
 * @author rafaelvictor01
 * @param props ITextInputLabelICPProps
 * @returns JSX.Element
 */
export default function TextInputLabelICP(
  props: ITextInputLabelICPProps
): JSX.Element {
  return (
    <MainWrapperTextInputLabelSCP>
      <WrapperLabelSCP>{props.label}</WrapperLabelSCP>
      {props.isRequired && <WrapperAsteriskSCP>*</WrapperAsteriskSCP>}
    </MainWrapperTextInputLabelSCP>
  )
}

const MainWrapperTextInputLabelSCP = styled.div`
  display: flex;
  font-size: 12px;
  padding-left: 15px;
`
const WrapperLabelSCP = styled.div`
  display: flex;
`
const WrapperAsteriskSCP = styled.div`
  display: grid;
  align-items: flex-start;
  color: #ff4d4f;
  padding-left: 5px;
`
