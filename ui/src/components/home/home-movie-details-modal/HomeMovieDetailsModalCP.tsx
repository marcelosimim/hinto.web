import React, { useContext } from 'react'
import styled from 'styled-components'
import ButtonCP from '../../../common/components/button/ButtonCP'
import ModalCP from '../../../common/components/modal/ModalCP'
import { GlobalContext } from '../../../common/context/GlobalContext'
import { IHomeScreenMovieDetailModalResponseDTO } from '../../../interfaces/dtos/response/IHomeScreenMovieDetailModalResponseDTO'
import { HomeScreenMovieDetailModalMock } from '../../../mocks/HomeScreenModalMock'
import HomeMovieDetailsModalContentCP from './home-movie-details-modal-content/HomeMovieDetailsModalContentCP'

/**
 * Agrupa todo o conteúdo referente ao modal que permite o usuário observar detalhes de um filme na
 * tela principal do sistema
 * @todo precisa melhorar quase tudo neste componente. Ele foi criado apenas para a primeira entrega do front
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function HomeMovieDetailsModalCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)
  const MOCK: IHomeScreenMovieDetailModalResponseDTO = HomeScreenMovieDetailModalMock
  return (
    <MainWrapperHomeMovieDetailsModalSCP>
      <ModalCP
        visible={globalContext.showModal}
        onClose={globalContext.closeMovieDetailsModal}
        customFooter={[
          <FooterWrapperSCP key={1}>
            <ButtonWrapperSCP>
              <ButtonCP
                onClick={() => console.log('implementar o serviço de like')}
              >
                Like!
              </ButtonCP>
            </ButtonWrapperSCP>
            <ButtonWrapperSCP>
              <ButtonCP
                onClick={() =>
                  console.log('implementar o serviço de add na lista')
                }
              >
                Add na minha lista
              </ButtonCP>
            </ButtonWrapperSCP>
            <ButtonWrapperSCP>
              <ButtonCP
                onClick={() => console.log('implementar o serviço de deslike')}
              >
                Deslike
              </ButtonCP>
            </ButtonWrapperSCP>
            <ButtonWrapperSCP>
              <ButtonCP
                onClick={() =>
                  console.log('implementar o serviço de remover da lista')
                }
              >
                Remover da minha lista
              </ButtonCP>
            </ButtonWrapperSCP>
          </FooterWrapperSCP>
        ]}
        width={750}
        title={`Confira os detalhes de ${MOCK.movieTitle}`}
      >
        <HomeMovieDetailsModalContentCP {...MOCK} />
      </ModalCP>
    </MainWrapperHomeMovieDetailsModalSCP>
  )
}

const MainWrapperHomeMovieDetailsModalSCP = styled.div``
const FooterWrapperSCP = styled.div`
  display: flex;
`
const ButtonWrapperSCP = styled.div`
  margin-right: 10px;
`
