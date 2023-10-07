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
import CategoryCard from '../components/categoryCard'
import Footer from '@/components/footer'
import Categories from '../data/categories.json'
import Category from '@/interfaces/Category'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      {Categories.map((categoryObject: Category, index: number) => (
        <CategoryCard key={index} category={categoryObject} />
      ))}
        <Button onClick={() => signIn()}>
        LOGGEARSE
      </Button>
      <Footer/>
    </>
  )
}
