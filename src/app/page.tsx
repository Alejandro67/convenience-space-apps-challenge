"use client"
import Header from '@/components/header';
import Footer from '@/components/footer';
import CategoryCard from '@/components/categoryCard';
import Categories from '../data/categories.json';
import { useEffect } from 'react';
import Category from '@/interfaces/Category';

export default function Home() {
"use client"
  useEffect(() => {
    console.log(Categories)
  },[])

  return (
    <>
    <Header></Header>
    {Categories.map((categoryObject:Category)=> {
      <CategoryCard category={categoryObject}/>
    })}
    <Footer></Footer>
    </>
  );
}
