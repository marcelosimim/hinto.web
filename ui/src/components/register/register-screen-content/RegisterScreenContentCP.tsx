import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import LoginImageSRC from '../../../assets/LoginImage.svg'
import CardCP from '../../../common/components/card/CardCP'
import HintoTextCP from '../../../common/components/hinto-text/HintoTextCP'
import RegisterFormCP from '../register-form/RegisterFormCP'

/**
 * Conteúdo da tela de cadastro do sistema
 * @author marcelosimim
 * @returns JSX.Element
 */
export default function RegisterScreenContentCP(): JSX.Element {
  return (
    <MainWrapperRegisterScreenContentSCP>
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
            <RegisterFormCP />
          </ContentCardWrapperSCP>
        </CardCP>
      </ContentWrapperSCP>
    </MainWrapperRegisterScreenContentSCP>
  )
}

const MainWrapperRegisterScreenContentSCP = styled.div`
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
