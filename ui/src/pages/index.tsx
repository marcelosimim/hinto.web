import React from 'react'
import styled from 'styled-components'
import LandingScreenContentCP from '../components/landing/landing-screen-content/LandingScreenContentCP'

/**
 * Representa a landing page do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingScreenCP(): JSX.Element {
  return (
    <MainWrapperLandingScreenSCP>
      <LandingScreenContentCP />
    </MainWrapperLandingScreenSCP>
  )
}

const MainWrapperLandingScreenSCP = styled.div``
