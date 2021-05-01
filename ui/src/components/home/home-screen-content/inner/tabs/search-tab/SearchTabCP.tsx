import React from 'react'
import styled from 'styled-components'
import SearchFieldICP from './inner/SearchFieldICP'

/**
 * Constrói a tela de busca para o usuário
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function SearchTabCP(): JSX.Element {
  return (
    <MainWrapperSearchTabSCP>
      <SearchFieldICP placeholder={'Busque pelo seu filme favorito'} />
    </MainWrapperSearchTabSCP>
  )
}

const MainWrapperSearchTabSCP = styled.div`
  align-content: center;
`
