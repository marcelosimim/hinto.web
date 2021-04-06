import React from 'react'
import styled from 'styled-components'
import { TextCPTypesEnum } from '../../../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../../../common/components/text/TextCP'

/**
 * Constrói o componente de texto presente no topo da tela de apresentação do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingTopTextCP(): JSX.Element {
  return (
    <TopTextWrapperSCP>
      <TextCP content={'Assista agora'} type={TextCPTypesEnum.danger} />
      <TextCP content={'Top filmes do momento'} />
    </TopTextWrapperSCP>
  )
}

const TopTextWrapperSCP = styled.div`
  font-size: 22px;
  font-weight: 400;
  flex-direction: column;
  align-content: center;
  padding-bottom: 20px;
  padding-left: 130px;
`
