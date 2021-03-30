import React from 'react'
import styled from 'styled-components'
import LoginScreenContentCP from '../components/login/login-screen-content/LoginScreenContentCP'

export default function LoginScreenCP(): JSX.Element {
  return (
    <MainWrapperLoginScreenSCP>
      <LoginScreenContentCP />
    </MainWrapperLoginScreenSCP>
  )
}

const MainWrapperLoginScreenSCP = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vmin;
`
