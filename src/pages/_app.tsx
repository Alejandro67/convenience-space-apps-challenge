import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }:{Component:any, pageProps:any}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;