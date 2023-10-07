import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
  useRouter
} from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"
import {
  Box,
  Button, Flex
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
      <Header />
      <Flex flexWrap="wrap">
        {Categories.map((categoryObject: Category, index: number) => (
          <Box
            key={index}
            flex={1}
            flexBasis={`calc(100% / ${3})`} // Calculate the width based on the desired number of columns
            p={2} // Adjust padding as needed
          >
            <CategoryCard category={categoryObject} />
          </Box>
        ))}
      </Flex>
      <Footer />
    </>
  );
}
