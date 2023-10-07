import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import About from "./projectTab/about";
import Community from "./projectTab/community";
import Files from "./projectTab/file";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ProjectOverview: React.FC = () => {
  return (
    <>
      <Header />
      <Tabs size="md" variant="enclosed">
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
