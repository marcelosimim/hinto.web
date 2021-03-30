import React from 'react'
import styled from 'styled-components'
import { TextCPTypesEnum } from '../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../common/components/text/TextCP'

export default function HomeScreenCP(): JSX.Element {
  return (
    <MainWrapperHomeScreenSCP>
      <TextCP title={true} content={'HomeScreen'} />
      <TextCP content={'teste'} type={TextCPTypesEnum.warning} />
    </MainWrapperHomeScreenSCP>
  )
}

const MainWrapperHomeScreenSCP = styled.div``
