import React from 'react'
import styled from 'styled-components'
import TesteDiv from './teste'

/**
 * Representa a landing page do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingPage(): JSX.Element {
  return (
    <Container>
      <div> Cabeçalho </div>
      <TesteDiv contentProps1={'Ameno ou dorimé ???'} contentProps2={5656565} />
      <div> rodapé </div>
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
