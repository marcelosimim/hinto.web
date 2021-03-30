import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import TextCP from '../../text/TextCP'

interface IHeaderOptionICPProps {
  href: string
  text: string
}

/**
 * Criado para simplificar os componentes de options do HeaderCP
 * @param props IHeaderOptionICPProps
 * @returns JSX.Element
 * @author rafaelvictor01
 */
export default function HeaderOptionICP(
  props: IHeaderOptionICPProps
): JSX.Element {
  return (
    <MainWrapperHeaderOptionSCP>
      <Link href={props.href}>
        <a>
          <TextCP content={props.text} />
        </a>
      </Link>
    </MainWrapperHeaderOptionSCP>
  )
}

const MainWrapperHeaderOptionSCP = styled.div`
  display: flex;
  padding: 10px;
`
