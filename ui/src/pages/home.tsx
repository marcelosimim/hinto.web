import React from 'react'
import styled from 'styled-components'
import HomeScreenContentCP from '../components/home/home-screen-content/HomeScreenContentCP'

/**
 * Principal Tela do sistema
 * @returns JSX.Element
 */
export default function HomeScreenCP(): JSX.Element {
  return (
    <MainWrapperHomeScreenSCP>
      <HomeScreenContentCP />
    </MainWrapperHomeScreenSCP>
  )
}

const MainWrapperHomeScreenSCP = styled.div``
