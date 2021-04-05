import React from 'react'
import CardCP from '../../../common/components/card/CardCP'
import LoginFormCP from '../login-form/LoginFormCP'
import Image from 'next/image'
import styled from 'styled-components'
import LoginImageSRC from '../../../assets/LoginImage.svg'
import HintoTextCP from '../../../common/components/hinto-text/HintoTextCP'

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
            <Image
              src={LoginImageSRC}
              alt={'login-image'}
              width={150}
              height={150}
              className={'login-image'}
            />
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
