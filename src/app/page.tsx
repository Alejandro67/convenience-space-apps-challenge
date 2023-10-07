"use client";
import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryCard from "@/components/categoryCard";
import Categories from "../data/categories.json"; // Ensure the correct import path for your JSON file
import Category from "@/interfaces/Category";
import { Box, Flex } from "@chakra-ui/react";

const Home: React.FC = () => {
  useEffect(() => {
    console.log(Categories);
  }, []);

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
};

export default Home;
