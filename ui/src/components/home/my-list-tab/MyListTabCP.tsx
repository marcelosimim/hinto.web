import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PaginationCP from '../../../common/components/pagination/PaginationCP'
import { IMyListTabResponseDTO } from '../../../interfaces/dtos/response/IMyListTabResponseDTO'
import { MyListTabMock } from '../../../mocks/MyListTabMock'
import HomeCardCP from '../home-card/HomeCardCP'

const MOCK: IMyListTabResponseDTO = MyListTabMock
const PAGE_SIZE = 10 /** A tela não está necessáriamente preparada para alterações nesta constante */

/**
 * Constrói a tab com a lista de filmes do usuário
 * @author rafaelvictor01
 * @returns JSX.Element
 * @todo Abstrair os componentes Col e Row para não usar nada do antd diretamente aqui - Baixo impacto pra muito esforço... deixar pra depois
 */
export default function MyListTabCP(): JSX.Element {
  useEffect(whenRender, [])
  const [listOfCards, setListOfCards] = useState([])

  function whenRender(): void {
    setListOfCards(
      MOCK.list.map((currentMovie, index) => (
        <Col className={'gutter-row'} key={index}>
          <HomeCardCP
            urlImage={currentMovie.urlImage}
            movieTitle={currentMovie.title}
            synopsis={currentMovie.synopsis}
          />
        </Col>
      ))
    )
  }

  function onChange(value): void {
    console.log('value', value)
  }

  return (
    <MainWrapperMyListTabSCP>
      <Row gutter={[20, 20]} justify={'center'}>
        {listOfCards}
      </Row>
      <PaginationCP
        onChange={onChange}
        total={MOCK.total}
        pageSize={PAGE_SIZE}
      />
    </MainWrapperMyListTabSCP>
  )
}

const MainWrapperMyListTabSCP = styled.div`
  .ant-pagination {
    margin: 20px;
  }
`
