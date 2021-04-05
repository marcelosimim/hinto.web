import React from 'react'
import styled from 'styled-components'
import RegisterScreenContentCPs from '../components/register/register-screen-content/RegisterScreenContentCP'

export default function RegisterScreenCP(): JSX.Element {
  return (
    <MainWrapperRegisterScreenSCP>
      <RegisterScreenContentCPs />
    </MainWrapperRegisterScreenSCP>
  )
}

const MainWrapperRegisterScreenSCP = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vmin;
  margin-bottom: 5000px;
`
