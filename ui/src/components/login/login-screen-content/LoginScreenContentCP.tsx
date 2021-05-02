import React from 'react'
import CardCP from '../../../common/components/card/CardCP'
import LoginFormCP from '../login-form/LoginFormCP'
import styled from 'styled-components'
import HintoTextCP from '../../../common/components/hinto-text/HintoTextCP'
import UserImageCP from '../../../common/components/user-image/UserImageCP'

/**
 * Conteúdo da tela de login do sistema
 * @author marcelosimim
 * @returns JSX.Element
 */
export default function LoginScreenContentCP(): JSX.Element {
  return (
    <MainWrapperLoginScreenContentSCP>
      <HintoTextCP />
      <ContentWrapperSCP>
        <CardCP style={{ width: '500px' }}>
          <ContentCardWrapperSCP>
            <UserImageCP />
            <LoginFormCP />
          </ContentCardWrapperSCP>
        </CardCP>
      </ContentWrapperSCP>
    </MainWrapperLoginScreenContentSCP>
  )
}

const MainWrapperLoginScreenContentSCP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ContentWrapperSCP = styled.div`
  display: flex;
  justify-content: center;
`
const ContentCardWrapperSCP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .login-image {
    align-self: center;
  }
`
