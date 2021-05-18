import { Empty } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IEmptyCPProps {
  description?: string
  image?: string
}

/**
 * Cria o componente que indica ao usuário quando determinada secção está vazia
 * @author rafaelvictor01
 * @param props IEmptyCPProps
 * @returns JSX.Element
 */
export default function EmptyCP(props: IEmptyCPProps): JSX.Element {
  return (
    <MainWrapperEmptySCP>
      <Empty
        description={props.description || 'Sem dados 😅'}
        image={props.image || Empty.PRESENTED_IMAGE_SIMPLE}
      />
    </MainWrapperEmptySCP>
  )
}

const MainWrapperEmptySCP = styled.div`
  padding-top: 18%;
`
