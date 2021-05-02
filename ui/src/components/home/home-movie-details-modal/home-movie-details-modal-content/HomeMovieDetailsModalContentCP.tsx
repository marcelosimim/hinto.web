import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd'
import { IHomeScreenMovieDetailModalResponseDTO } from '../../../../interfaces/dtos/response/IHomeScreenMovieDetailModalResponseDTO'
import TextCP from '../../../../common/components/text/TextCP'
import { TextCPTypesEnum } from '../../../../common/components/text/enums/TextCPTypesEnum'

export default function HomeMovieDetailsModalContentCP(
  props: IHomeScreenMovieDetailModalResponseDTO
): JSX.Element {
  return (
    <MainWrapperHomeMovieDetailsModalContentSCP>
      <ImageAreaWrapperSCP>
        <Image
          height={350}
          width={290}
          title={props.movieTitle}
          src={props.urlImage}
          alt={`${props.movieTitle}-img`}
        />
        <TextWrapperSCP>
          <TextCP content={props.movieTitle} />
        </TextWrapperSCP>
      </ImageAreaWrapperSCP>
      <SynopsisAreaWrapperSCP>
        <TextWrapperSCP>
          <TextCP content={props.synopsis} />
        </TextWrapperSCP>
        <TextWrapperSCP>
          <TextCP
            content={`Quantas pessoas já AMAM este filme: ${props.likes}`}
            type={TextCPTypesEnum.danger}
          />
          <TextCP
            content={`Atores: ${props.actors.map(currentActor => {
              return ' ' + currentActor
            })}`}
          />
          <TextCP content={`Diretor: ${props.director}`} />
        </TextWrapperSCP>
      </SynopsisAreaWrapperSCP>
    </MainWrapperHomeMovieDetailsModalContentSCP>
  )
}

const MainWrapperHomeMovieDetailsModalContentSCP = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template: 'columnWithImage columnWithSynopsis';
`
const ImageAreaWrapperSCP = styled.div`
  display: grid;
  grid-area: columnWithImage;
  background-color: ${props => props.theme.colors.mainBackground};
  border-radius: ${props => props.theme.other.defaultBorderRadius};
  width: 330px;
  text-align: center;
  justify-content: center;
  padding-bottom: 20px;
  .ant-image {
    margin-top: 20px;
  }
`
const TextWrapperSCP = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.other.defaultBorderRadius};
  max-width: 290px;
  padding: 5px;
  margin: 10px 20px 10px 20px;
`
const SynopsisAreaWrapperSCP = styled.div`
  display: grid;
  grid-area: columnWithSynopsis;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => props.theme.colors.mainBackground};
  border-radius: ${props => props.theme.other.defaultBorderRadius};
`
