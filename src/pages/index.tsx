"use client";
import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryCard from "@/components/categorycard";
// Ensure the correct import path for your JSON file
import Category from "@/interfaces/Category";
import { Box, Flex } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

const CategoryPage: React.FC = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("cat");

  return (
    <>
      <Header />
      <CategoryCard category={{ name: "", description: "", imageUrl: "" }} />
      <Footer />
    </>
  );
};

export default CategoryPage;
