import { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LayoutCP } from '../common/components/layout/LayoutCP'
import GlobalStyle from '../common/styles/global'
import theme from '../common/styles/theme'
import { CommonUtils } from '../common/utils/CommonUtils'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR'
import '../common/styles/antd.less'
import { GlobalContextProvider } from '../common/context/GlobalContext'

/**
 * @param AppProps
 * @returns JSX.Element
 * @author rafaelvictor01
 *
 * @todo add description
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <ConfigProvider locale={ptBR}>
          <title>{CommonUtils.getTextForTitle(router.route)}</title>
          <GlobalStyle />
          <LayoutCP
            currentRoute={router.route}
            content={<Component {...pageProps} />}
          />
        </ConfigProvider>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}
