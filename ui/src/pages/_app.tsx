import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../common/styles/global'
import theme from '../common/styles/theme'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
