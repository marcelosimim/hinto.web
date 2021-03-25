import React from 'react'
import styled from 'styled-components'
import { TextCPTypesEnum } from '../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../common/components/text/TextCP'

export default function LoginScreenCP(): JSX.Element {
  return (
    <MainWrapperLoginScreenSCP>
      <TextCP title={true} content={'LoginScreen'} />
      <TextCP content={'teste'} type={TextCPTypesEnum.danger} />
    </MainWrapperLoginScreenSCP>
  )
}

const MainWrapperLoginScreenSCP = styled.div``
