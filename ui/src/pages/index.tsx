import React from 'react'
import styled from 'styled-components'

/**
 * Representa a landing page do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingPage(): JSX.Element {
  return (
    <Container>
      <h1> Cabeçalho </h1>
      <p> rodapé </p>
    </Container>
  )
}

const Container = styled.div`
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
