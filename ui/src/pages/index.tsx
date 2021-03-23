import { InputNumber } from 'antd'
import React from 'react'
import styled from 'styled-components'

export default function Home(): JSX.Element {
  return (
    <Container>
      <h1> hoi </h1>
      <InputNumber
        size="large"
        min={1}
        max={10}
        style={{ width: 100 }}
        defaultValue={3}
        name="inputNumber"
      />
      <p> olar </p>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
