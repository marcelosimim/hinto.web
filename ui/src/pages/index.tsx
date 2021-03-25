import React from 'react'
import styled from 'styled-components'
import { TextCPTypesEnum } from '../common/components/text/enums/TextCPTypesEnum'
import TextCP from '../common/components/text/TextCP'

/**
 * Representa a landing page do sistema
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function LandingScreenCP(): JSX.Element {
  return (
    <MainWrapperLandingScreenSCP>
      <TextCP title={true} content={'LandingScreen'} />
      <TextCP content={'teste'} type={TextCPTypesEnum.success} />
    </MainWrapperLandingScreenSCP>
  )
}

const MainWrapperLandingScreenSCP = styled.div``
