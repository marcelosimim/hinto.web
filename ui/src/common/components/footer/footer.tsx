import {
  AndroidOutlined,
  AppleOutlined,
  TwitterOutlined
} from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'

/**
 * @author marcelosimim
 * @returns JSX.Element
 */
export default function Footer(): JSX.Element {
  return (
    <FooterStyle>
      <Column1>
        <a href="#">
          <TwitterOutlined style={{ fontSize: '25px', color: '#5F5F6E' }} />
        </a>
        <a href="#">
          <AppleOutlined style={{ fontSize: '25px', color: '#5F5F6E' }} />
        </a>
        <a href="#">
          <AndroidOutlined style={{ fontSize: '25px', color: '#5F5F6E' }} />
        </a>
      </Column1>

      <Column2>
        <p>© 2021 - All rights licensed</p>
      </Column2>

      <Column3>
        <p>For student purposes</p>
      </Column3>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  background: #1c1c24;
  width: 100vw;
  height: 5vw;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Column1 = styled.div`
  display: inline-block;
  padding-left: 5vw;
  padding-right: 32vw;
`

const Column2 = styled.div`
  display: inline-block;
  padding-right: 400px;

  p {
    font-size: 15px;
  }
`
const Column3 = styled.div`
  display: inline-block;
  p {
    font-size: 15px;
  }
`
