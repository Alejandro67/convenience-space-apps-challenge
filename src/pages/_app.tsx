import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'
import ProjectsProvider from '@/provider/ProjectsProvider'

function MyApp({ 
  Component, 
  pageProps: {
    session,
    ...pageProps
  } }:{Component:any, pageProps:any}) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <ProjectsProvider>
         <Component {...pageProps} />
        </ProjectsProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp;