import React from 'react'
import CardCP from '../../../common/components/card/CardCP'
import LoginFormCP from '../login-form/LoginFormCP'
import Image from 'next/image'
import styled from 'styled-components'
import TextCP from '../../../common/components/text/TextCP'
import { TextCPTypesEnum } from '../../../common/components/text/enums/TextCPTypesEnum'
import LoginImageSRC from '../../../assets/LoginImage.svg'

export default function LoginScreenContentCP(): JSX.Element {
  return (
    <MainWrapperLoginScreenContentSCP>
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
const TextWrapperSCP = styled.div`
  display: flex;
  align-self: center;
  width: 500px;
  margin: 15px;
  font-size: 54px;
  justify-content: space-between;
  padding: 20px;
`
const ContentCardWrapperSCP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .login-image {
    align-self: center;
  }
`
