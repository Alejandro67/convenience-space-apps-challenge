"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryCard from "@/components/categoryCard";
// Ensure the correct import path for your JSON file
import Category from "@/interfaces/Category";
import { Box, Flex } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useProjects } from "@/provider/ProjectsProvider";
import { Project } from "@/types/Project";
import ProjectCard from "@/components/projectCard";

const CategoryPage: React.FC = () => {
  const projectContext = useProjects();

  const searchParams = useSearchParams();

  const search = searchParams.get("cat");

  const [filter, setFilter] = useState("");
  const [projectsObjects, setProjectsObjects] = useState<Project[]>([]);
  const [backup,setBackup] = useState<Project[]>([])
  useEffect(() => {
    const filteredProjects = projectsObjects.filter((project) =>
      project.name.toLowerCase().includes(filter.toLowerCase())
    );

    // Update the filtered categories in state

    if (filter === "") {
      
      setProjectsObjects(backup);
    } else {
      setProjectsObjects(filteredProjects);
    }
  }, [filter]);

  useEffect(() => {
    
    let listProjects = projectContext.state.projects;
    let formattedListProjects:Project[] = [];
    console.log(listProjects)
    listProjects.forEach(project => {
        if (project.categories.includes(search?.toString())){
            formattedListProjects.push(project);
        }
        setBackup(formattedListProjects)
    });
    setProjectsObjects(formattedListProjects);

  }, []);

  const handleInputChange = (value: SetStateAction<string>) => {
    setFilter(value);
  };

  return (
    <>
      <Header onChangeInput={handleInputChange} />
      <Flex flexWrap="wrap">
        {projectsObjects.map((projectObject: Project, index: number) => (
          <Box
            key={index}
            flex={1}
            flexBasis={`calc(100% / ${3})`} // Calculate the width based on the desired number of columns
            p={2} // Adjust padding as needed
          >
            <ProjectCard project={projectObject} />
          </Box>
        ))}
      </Flex>
      
      <Footer />
    </>
  );
};

export default CategoryPage;
