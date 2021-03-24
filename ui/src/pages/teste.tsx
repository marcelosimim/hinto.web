import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const TEXT_BUTTON = 'clicou'

// Formato padrão para criação de interfaces
// Estude sobre typescript
interface ITesteDivProps {
  contentProps1: string
  contentProps2: number
}

/**
 * Será chamada para cumprir a função de clique
 * Estude sobre JS
 */
function onClickButton(): void {
  console.log(TEXT_BUTTON)
}

/**
 * Serve de exemplo para o marcelo
 * Estude sobre React
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function TesteDiv(props: ITesteDivProps): JSX.Element {
  return (
    <div>
      <h1>{props.contentProps1}</h1>
      <ContentWrapper>
        <h1>{props.contentProps2}</h1>
      </ContentWrapper>
      <Button onClick={onClickButton}>Clique-me</Button>
    </div>
  )
}

/**
 * Estude sobre Styled-components
 */
const ContentWrapper = styled.div`
  h1 {
    color: red;
  }
`
