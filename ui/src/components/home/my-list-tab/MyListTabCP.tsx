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

  function openMovieDetailsModal(movieID: number): void {
    console.log('movieID', movieID)
  }

  function whenRender(): void {
    setListOfCards(
      MOCK.list.map((currentMovie, index) => (
        <Col className={'gutter-row'} key={index}>
          <HomeCardCP
            movieID={currentMovie.id}
            urlImage={currentMovie.urlImage}
            movieTitle={currentMovie.title}
            synopsis={currentMovie.synopsis}
            onClick={openMovieDetailsModal}
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
      <ContentWrapperMyListTabSCP>{listOfCards}</ContentWrapperMyListTabSCP>
      <Row justify={'center'}>
        <PaginationCP
          onChange={onChange}
          total={MOCK.total}
          pageSize={PAGE_SIZE}
        />
      </Row>
    </MainWrapperMyListTabSCP>
  )
}

const MainWrapperMyListTabSCP = styled.div`
  .ant-pagination {
    margin: 20px;
  }
`
const ContentWrapperMyListTabSCP = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  justify-content: center;
  justify-items: center;
`
