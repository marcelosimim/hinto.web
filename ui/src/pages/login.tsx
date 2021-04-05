import React from 'react'
import styled from 'styled-components'
import LoginScreenContentCP from '../components/login/login-screen-content/LoginScreenContentCP'

/**
 * Tela de login do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
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
