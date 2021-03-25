import React from 'react'
import styled from 'styled-components'
import { TextCPTypesEnum } from '../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../common/components/text/TextCP'

export default function RegisterScreenCP(): JSX.Element {
  return (
    <MainWrapperRegisterScreenSCP>
      <TextCP title={true} content={'RegisterScreen'} />
      <TextCP content={'teste'} type={TextCPTypesEnum.secondary} />
    </MainWrapperRegisterScreenSCP>
  )
}

const MainWrapperRegisterScreenSCP = styled.div``
