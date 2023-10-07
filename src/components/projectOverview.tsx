import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import About from "./project/about";
import Community from "./project/community";
import Files from "./project/File";

const ProjectOverview: React.FC = () => {
  return (
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
  );
};

export default ProjectOverview;
