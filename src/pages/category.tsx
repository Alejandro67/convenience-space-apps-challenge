"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryCard from "@/components/categoryCard";
 // Ensure the correct import path for your JSON file
import Category from "@/interfaces/Category";
import { Box, Flex } from "@chakra-ui/react";
import { useSearchParams} from "next/navigation";
import {FaArrowLeft} from "react-icons/fa";


const CategoryPage: React.FC = () => {
  
    const searchParams = useSearchParams()
 
    const search = searchParams.get('cat')

    
 
     return (
    <>
      <Header />
      
      <h1>{search}</h1>
      <Footer />
    </>
  );

  
  
};

export default CategoryPage;
