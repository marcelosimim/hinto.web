import {
  AndroidOutlined,
  AppleOutlined,
  TwitterOutlined
} from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { TextCPTypesEnum } from '../text/enums/TextCPTypesEnum'
import TextCP from '../text/TextCP'

/**
 * Responsável por renderizar o componente com o footer principal do sistema.
 * @author rafaelvictor01
 * @author marcelosimim
 * @returns JSX.Element
 */
export default function FooterCP(): JSX.Element {
  return (
    <MainWrapperFooterSCP>
      <ContentFooterWrapperSCP>
        <ColWrapperSCP>
          <TwitterOutlined
            style={{ fontSize: '18px', color: `${theme.colors.secondary}` }}
          />
          <AppleOutlined
            style={{ fontSize: '18px', color: `${theme.colors.secondary}` }}
          />
          <AndroidOutlined
            style={{ fontSize: '18px', color: `${theme.colors.secondary}` }}
          />
        </ColWrapperSCP>
        <TextCP
          content={'© 2021 - All rights licensed'}
          type={TextCPTypesEnum.secondary}
        />
        <TextCP
          content={'For student purposes'}
          type={TextCPTypesEnum.secondary}
        />
      </ContentFooterWrapperSCP>
    </MainWrapperFooterSCP>
  )
}

const MainWrapperFooterSCP = styled.footer`
  flex-shrink: 0;
  z-index: ${props => props.theme.zIndex.headerAndFooter};
  background-color: ${props => props.theme.colors.headerAndFooter};
  border-top: 2px solid ${props => props.theme.colors.headerAndFooterDivisor};
`
const ContentFooterWrapperSCP = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4%;
  justify-content: space-between;
  height: ${props => props.theme.defaultSize.headerAndFooter};
`
const ColWrapperSCP = styled.div`
  display: flex;
`
