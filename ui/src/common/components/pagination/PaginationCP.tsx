import { Pagination } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface IPaginationCPProps {
  total: number
  pageSize: number
  onChange: (currentPage: number) => void
}

export default function PaginationCP(props: IPaginationCPProps): JSX.Element {
  return (
    <MainWrapperPaginationSCP>
      <Pagination
        onChange={props.onChange}
        pageSize={props.pageSize}
        total={props.total}
        showSizeChanger={false}
        showQuickJumper={false}
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
