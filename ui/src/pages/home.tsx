import { Spin } from 'antd'
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
  var user = globalContext.authUser;
  console.log(user + ' -- ')
  if(typeof user === 'undefined'){
    return (
      <MainWrapperHomeScreenSCP>
        
      </MainWrapperHomeScreenSCP>
    )
  }
  return (
    <MainWrapperHomeScreenSCP>
      {user !== null ? (
        <HomeScreenContentCP />
      ) : (
        <ResultCP status={'403'} description={'Acesso negado'} />
      )}
    </MainWrapperHomeScreenSCP>
  )
}

const MainWrapperHomeScreenSCP = styled.div``
