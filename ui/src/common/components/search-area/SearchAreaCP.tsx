import Search from 'antd/lib/input/Search'
import React from 'react'
import styled from 'styled-components'

interface ISearchAreaCPProps {
  placeholder: string
  disable?: boolean
  onSearch?: (value: string) => void
}

/**
 * Abstrai a criação de um campo de busca personalizado
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function SearchAreaCP(props: ISearchAreaCPProps): JSX.Element {
  return (
    <MainWrapperSearchFieldICP>
      <Search
        disabled={props.disable}
        placeholder={props.placeholder}
        onSearch={props.onSearch && props.onSearch}
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
