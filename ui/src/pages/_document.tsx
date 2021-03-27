import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

/**
 * Esse arquivo é necessário para que o styled-components funcione adequadamente.
 *
 * Explicação: Sem esse arquivo de configurações o navegador, responsável por aplicar os
 * styled-components, teria que esperar o servidor node enviar a tela, esperar a tela ser
 * renderizada para, só então, aplicar o estilo. Isso causaria o glitch na tela.
 *
 * Mantenha esse arquivo sempre. PLS.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
 * Esse arquivo em especial está em dentro do diretório "pages" desse repositório
 *
 * @author rafaelvictor01
 * @todo Add o favicon
 */
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          {/* Add o favicon */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
