import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    foreground: '#000000',
    background: '#FFFFFF'
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <style>{`
            body {
              margin: 20px;
              overflow-x: hidden;
            } 
          `}
          </style>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
