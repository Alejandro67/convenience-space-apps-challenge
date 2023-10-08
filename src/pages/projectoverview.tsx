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
import Categories from "../data/categories.json";
import Category from "@/interfaces/Category";
import { useProjects } from "@/provider/ProjectsProvider";
import { SetStateAction, useEffect, useState } from "react";

const ProjectOverview: React.FC = () => {
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
