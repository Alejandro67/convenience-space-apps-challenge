import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
  useRouter
} from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"
import {
  Button
} from "@chakra-ui/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  console.log(router.query)
  const {data:session} = useSession()
  if(session){
    alert("LOGGED IN!")
  }
  return (
    <>
      <Button onClick={() => signIn()}>
        LOGGEARSE
      </Button>
    </>
  )
}
