import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import Header from "@/components/header";
import CategoryCard from "../components/categoryCard";
import Footer from "@/components/footer";
import Categories from "../data/categories.json";
import Category from "@/interfaces/Category";
import { useProjects } from "@/provider/ProjectsProvider";
import { SetStateAction, useEffect, useState } from "react";
import ICategoryCard from "@/interfaces/Category";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projectsContext = useProjects();
  console.log("STATE:", projectsContext.state.projects);

  const [filter, setFilter] = useState("");
  const [categoriesObjects, setCategoriesObjects] = useState<Category[]>([]);

  useEffect(() => {
    const filteredCategories = categoriesObjects.filter((category) =>
      category.name.toLowerCase().includes(filter.toLowerCase())
    );

    // Update the filtered categories in state

    if (filter === "") {
      setCategoriesObjects(Categories);
    } else {
      setCategoriesObjects(filteredCategories);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    setCategoriesObjects(Categories);
  }, []);

  const handleInputChange = (value: SetStateAction<string>) => {
    setFilter(value);
  };

  return (
    <>
      <Header onChangeInput={handleInputChange} />
      <Heading m={5}>
        Categories
      </Heading>
      <Flex flexWrap="wrap">
        {categoriesObjects.map((categoryObject: ICategoryCard, index: number) => (
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
