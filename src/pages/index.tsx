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
import Header from '@/components/header'
import CategoryCard from '@/components/categorycard'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <CategoryCard category={{description:"", imageUrl:"", name:""}}/>
            <Button onClick={() => signIn()}>
        LOGGEARSE
      </Button>
      <Footer/>
    </>
  )
}
