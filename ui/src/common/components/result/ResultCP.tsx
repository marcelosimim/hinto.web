import { Result } from 'antd'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components'
import ButtonCP from '../button/ButtonCP'
import { ResultStatusTP } from './inner/ResultStatusTP'

interface IResultCPProps {
  status: ResultStatusTP
  description: string
}

/**
 * Cria um possível e situacional componente para informar um erro ao usuário
 * @author rafaelvictor01
 * @param props IResultCPProps
 * @returns JSX.Element
 */
export default function ResultCP(props: IResultCPProps): JSX.Element {
  const router = useRouter()
  return (
    <MainWrapperResultSCP>
      <Result
        status={props.status}
        title={props.status}
        subTitle={props.description}
        extra={
          <ButtonCP onClick={() => router.replace('/')}>
            Voltar para tela inicial
          </ButtonCP>
        }
      />
    </MainWrapperResultSCP>
  )
}

const MainWrapperResultSCP = styled.div``
