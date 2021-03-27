import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LayoutCP } from '../common/components/layout/LayoutCP'
import GlobalStyle from '../common/styles/global'
import theme from '../common/styles/theme'

/**
 * @param AppProps
 * @returns JSX.Element
 * @author rafaelvictor01
 *
 * @todo add description
 * @todo abstrair os headerOptions
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  function headerOptionsTemporary(): JSX.Element {
    return <div>options</div>
  }

  return (
    <ThemeProvider theme={theme}>
      <title>Hinto</title>
      <LayoutCP
        headerOptions={headerOptionsTemporary()}
        content={<Component {...pageProps} />}
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
