import React, { useContext } from 'react'
import styled from 'styled-components'
import ResultCP from '../common/components/result/ResultCP'
import { GlobalContext } from '../common/context/GlobalContext'
import HomeScreenContentCP from '../components/home/home-screen-content/HomeScreenContentCP'

/**
 * Principal Tela do sistema
 * @returns JSX.Element
 */
export default function HomeScreenCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)
  return (
    <MainWrapperHomeScreenSCP>
      {globalContext.authUser !== null ? (
        <HomeScreenContentCP />
      ) : (
        <ResultCP status={'403'} description={'Acesso negado'} />
      )}
    </MainWrapperHomeScreenSCP>
  )
}

const MainWrapperHomeScreenSCP = styled.div``
