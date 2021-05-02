import Search from 'antd/lib/input/Search'
import React from 'react'
import styled from 'styled-components'

interface ISearchFieldICPProps {
  placeholder: string
  disable?: boolean
}

/**
 * Abstrai a criação de um campo de busca personalizado para a tab de search
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function SearchFieldICP(
  props: ISearchFieldICPProps
): JSX.Element {
  function onSearch(value: string): void {
    console.log(value, 'implementar o serviço de pesquisa')
  }
  return (
    <MainWrapperSearchFieldICP>
      <Search
        disabled={props.disable}
        placeholder={props.placeholder}
        onSearch={onSearch}
        allowClear={false}
      />
    </MainWrapperSearchFieldICP>
  )
}

const MainWrapperSearchFieldICP = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  .ant-input {
    margin-right: 5px;
  }
`
