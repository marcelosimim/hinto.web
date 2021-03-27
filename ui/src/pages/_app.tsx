import { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LayoutCP } from '../common/components/layout/LayoutCP'
import GlobalStyle from '../common/styles/global'
import theme from '../common/styles/theme'
import { CommonUtils } from '../common/utils/CommonUtils'

/**
 * @param AppProps
 * @returns { JSX.Element }
 * @author rafaelvictor01
 *
 * @todo add description
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <title>{CommonUtils.getTextForTitle(router.route)}</title>
      <GlobalStyle />
      <LayoutCP
        currentRoute={router.route}
        content={<Component {...pageProps} />}
      />
    </ThemeProvider>
  )
}
