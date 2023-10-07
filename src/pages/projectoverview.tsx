import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Heading,
} from "@chakra-ui/react";
import About from "./projectTab/about";
import Community from "./projectTab/community";
import Files from "./projectTab/file";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";

const ProjectOverview: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // useEffect(() => {
  //   // Realiza la carga de datos cuando el componente se monte
  //   fetch("/data/projects.json")
  //     .then((response) => response.json())
  //     .then((data) => setProjects(data))
  //     .catch((error) => console.error("Error al cargar los proyectos", error));
  // }, []);

  const handleInputChange = (value: SetStateAction<string>) => {
    setFilter(value);
  };

  return (
    <>
      <Header onChangeInput={handleInputChange} />
      <Flex bg="#358262">
        <Heading size="lg" color="white" p={4} fontWeight={"bold"}>
          Project Name
        </Heading>
      </Flex>
      <Tabs mt={"1"} variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>About</Tab>
          <Tab>Files</Tab>
          <Tab>Community</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* import About Component */}
            <About />
          </TabPanel>
          <TabPanel>
            {/* import Files Component */}
            <Files />
          </TabPanel>
          <TabPanel>
            {/* import community Component */}
            <Community />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </>
  );
};

export default ProjectOverview;
