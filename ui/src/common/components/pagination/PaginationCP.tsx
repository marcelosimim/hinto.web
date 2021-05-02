import { Pagination } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IPaginationCPProps {
  total: number
  pageSize: number
  onChange: (currentPage: number) => void
}

/**
 * Componente de paginação abstraído do antd
 * @see https://ant.design/components/pagination/
 * @author rafaelvictor01
 * @param props IPaginationCPProps
 * @returns JSX.Element
 */
export default function PaginationCP(props: IPaginationCPProps): JSX.Element {
  return (
    <MainWrapperPaginationSCP>
      <Pagination
        total={props.total}
        showQuickJumper={false}
        showSizeChanger={false}
        onChange={props.onChange}
        pageSize={props.pageSize}
      />
    </MainWrapperPaginationSCP>
  )
}

const MainWrapperPaginationSCP = styled.div`
  .ant-pagination {
    display: flex;
    justify-content: center;
  }
  .ant-pagination-item,
  .ant-pagination-item-link {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.mainTextColor};
  }
`
