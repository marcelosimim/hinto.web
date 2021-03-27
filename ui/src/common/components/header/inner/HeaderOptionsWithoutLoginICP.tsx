import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import TextCP from '../../text/TextCP'

export default function HeaderOptionsWithoutLoginCP(): JSX.Element {
  return (
    <HeaderOptionsSCP>
      <ColWrapperSCP>
        <Link href={'/'}>
          <a>
            <TextCP content={'Sobre nós'} />
          </a>
        </Link>
      </ColWrapperSCP>
      <ColWrapperSCP>
        <Link href={'/login'}>
          <a>
            <TextCP content={'Login'} />
          </a>
        </Link>
      </ColWrapperSCP>
      <ColWrapperSCP>
        <Link href={'/cadastro'}>
          <a>
            <TextCP content={'Cadastre-se'} />
          </a>
        </Link>
      </ColWrapperSCP>
    </HeaderOptionsSCP>
  )
}

const HeaderOptionsSCP = styled.div`
  display: flex;
  flex-direction: row;
`
const ColWrapperSCP = styled.div`
  display: flex;
  padding: 10px;
`
