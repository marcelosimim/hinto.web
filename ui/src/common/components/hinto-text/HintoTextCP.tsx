import React from 'react'
import styled from 'styled-components'
import { TextCPTypesEnum } from '../text/enums/TextCPTypesEnum'
import TextCP from '../text/TextCP'

/**
 * Abstrai e encapsula a criação do componente com os escritos 'hinto' e 'ヒント'.
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HintoTextCP(): JSX.Element {
  return (
    <TextWrapperSCP>
      <TextCP content={'Hinto'} />
      <TextCP content={'ヒント'} type={TextCPTypesEnum.secondary} />
    </TextWrapperSCP>
  )
}

const TextWrapperSCP = styled.div`
  display: flex;
  align-self: center;
  width: 500px;
  margin: 15px;
  font-size: 54px;
  justify-content: space-between;
  padding: 20px;
`
