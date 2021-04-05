import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import LoginImageSRC from '../../../assets/LoginImage.svg'
import CardCP from '../../../common/components/card/CardCP'
import { TextCPTypesEnum } from '../../../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../../../common/components/text/TextCP'
import RegisterFormCP from '../register-form/RegisterFormCP'

export default function RegisterScreenContentCP(): JSX.Element {
  return (
    <MainWrapperRegisterScreenContentSCP>
      <TextWrapperSCP>
        <TextCP content={'Hinto'} />
        <TextCP content={'ヒント'} type={TextCPTypesEnum.secondary} />
      </TextWrapperSCP>
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
            <RegisterFormCP></RegisterFormCP>
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

const TextWrapperSCP = styled.div`
  display: flex;
  align-self: center;
  width: 500px;
  margin: 150px 15px 15px 15px;
  font-size: 54px;
  justify-content: space-between;
  padding: 20px;
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
