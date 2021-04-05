import React from 'react'
import styled from 'styled-components'
import RegisterScreenContentCP from '../components/register/register-screen-content/RegisterScreenContentCP'

/**
 * Tela para cadastro de usuários do sistema
 * @author rafaelvictor01
 * @author marcelosimim
 * @returns JSX.Element
 */
export default function RegisterScreenCP(): JSX.Element {
  return (
    <MainWrapperRegisterScreenSCP>
      <RegisterScreenContentCP />
    </MainWrapperRegisterScreenSCP>
  )
}

const MainWrapperRegisterScreenSCP = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
