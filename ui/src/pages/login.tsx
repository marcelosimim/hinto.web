import React from 'react'
import styled from 'styled-components'
import TextCP from '../common/components/text/TextCP'
import LoginScreenContentCP from '../components/login/login-screen-content/LoginScreenContentCP'

export default function LoginScreenCP(): JSX.Element {
  return (
    <MainWrapperLoginScreenSCP>
      <TextCP title={true} content={'LoginScreen'} />
      <LoginScreenContentCP content={'LoginScreen'} />
    </MainWrapperLoginScreenSCP>
  )
}

const MainWrapperLoginScreenSCP = styled.div`
  display: flex;
  align-content: center;
`
