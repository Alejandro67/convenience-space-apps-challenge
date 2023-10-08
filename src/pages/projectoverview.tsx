import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Heading,
  Container,
  SimpleGrid,
  Stack,
  Box,
  Text,
  Image,
  useColorModeValue,
  StackDivider,
  VStack,
  List,
  ListItem,
  Link,
  Button,
  FormControl,
  FormLabel,
  Textarea,
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
import { useSearchParams } from "next/navigation";
import { Project } from "@/types/Project";

const ProjectOverview: React.FC = () => {
  const projectsContext = useProjects();
  console.log("STATE:", projectsContext.state.projects);

  const searchParams = useSearchParams();

  const search = searchParams.get("id");

  const [filter, setFilter] = useState("");
  const [categoriesObjects, setCategoriesObjects] = useState<Category[]>([]);
  const [project, setProject] = useState<Project | null>();

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
    const selectedProject = projectsContext.state.projects.find((project) => {
      return project.id === search;
    });

    // Check if a project with the matching ID was found before setting it.
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, []);

  const handleInputChange = (value: SetStateAction<string>) => {
    setFilter(value);
  };
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  // Función para alternar el estado de autenticación
  const toggleAuthentication = () => {
    setUserIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };
  return (
    <>
      <Header onChangeInput={handleInputChange} />
      <Flex bg="#333">
        <Heading size="lg" color="white" p={4} fontWeight={"bold"}>
          {project?.name}
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
            <Container bg="white" maxW={"7xl"}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
              >
                <Flex>
                  <Image
                    rounded={"md"}
                    alt={"product image"}
                    src={
                      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
                    }
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    h={{ base: "100%", sm: "400px", lg: "500px" }}
                  />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={"header"}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                    >
                      Automatic Watch/Name
                    </Heading>
                    <Text
                      color={useColorModeValue("gray.900", "gray.400")}
                      fontWeight={300}
                      fontSize={"2xl"}
                    >
                      4 total files /Cant. de archivos
                    </Text>
                  </Box>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={"column"}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                      />
                    }
                  >
                    <VStack align="left" spacing={{ base: 4, sm: 6 }}>
                      <Text
                        color={useColorModeValue("gray.500", "gray.400")}
                        fontSize={"2xl"}
                        fontWeight={"300"}
                      >
                        General description:
                      </Text>
                      <Text
                        color={useColorModeValue("gray.500", "gray.400")}
                        fontSize={"2xl"}
                        fontWeight={"300"}
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </Text>
                    </VStack>

                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        color={useColorModeValue("yellow.500", "yellow.300")}
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Project Details
                      </Text>

                      <List spacing={2}>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Creator:
                          </Text>{" "}
                          <Link color="blue.400">John Smith</Link>
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Creation date:
                          </Text>{" "}
                          meta
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Category:
                          </Text>{" "}
                          Physics, Mechanics
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
          </TabPanel>
          <TabPanel>
            {/* import Files Component */}
            <Flex
              bg="gray.200"
              borderWidth={"2px"}
              borderRadius={"3xl"}
              w="100%"
              direction="column"
              align="center"
              h="95%"
              m={"4"}
              p={"4"}
            >
              <Flex>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  FILES
                </Text>
                <Flex direction="column" m={"4"} p={"4"}>
                  <Text fontSize={20} fontWeight={600}>
                    File Name
                  </Text>

                  <Link fontSize={20} fontWeight={600} color="blue.500">
                    File 1
                  </Link>
                  <Link fontSize={20} fontWeight={600} color="blue.500">
                    File 2
                  </Link>
                  <Link fontSize={20} fontWeight={600} color="blue.500">
                    File 3
                  </Link>
                  <Link fontSize={20} fontWeight={600} color="blue.500">
                    File 4
                  </Link>
                </Flex>
                <Flex direction="column" m={"4"} p={"4"}>
                  <Text fontSize={20} fontWeight={600}>
                    File Size
                  </Text>
                  <Text fontSize={20}>100mb</Text>
                  <Text fontSize={20}>200mb</Text>
                  <Text fontSize={20}>300mb</Text>
                  <Text fontSize={20}>400mb</Text>
                </Flex>
                <Flex direction="column" m={"4"} p={"4"}>
                  <Text fontSize={20} fontWeight={600}>
                    File Type
                  </Text>
                  <Text fontSize={20}>.doc</Text>
                  <Text fontSize={20}>.pdf</Text>
                  <Text fontSize={20}>.dxf</Text>
                  <Text fontSize={20}>.txt</Text>
                </Flex>
              </Flex>

              <Button maxW={"4"} mt={"4"} p={"4"}>
                Download All
              </Button>
            </Flex>
          </TabPanel>
          <TabPanel>
            {/* import community Component */}
            <Flex direction="column">
              {userIsLoggedIn ? (
                // Si el usuario está autenticado, muestra el formulario
                <Flex maxW={"lg"} direction="column" justify="center">
                  <FormControl>
                    <FormLabel mt={"2"}>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>
                  <Button
                    mt={"4"}
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    width="full"
                  >
                    Send Message
                  </Button>
                </Flex>
              ) : (
                // Si el usuario no está autenticado, muestra el mensaje
                <Text fontSize="lg" mt={4}>
                  For suggestions or comments, please log in.
                </Text>
              )}
              <Button
                mt={"4"}
                w={"20"}
                onClick={toggleAuthentication}
                justifySelf={"left"}
              >
                {userIsLoggedIn ? "Log out" : "Log in"}
              </Button>
              <Flex bg="gray.200" mt={"10"} direction="column" w="100%">
                <Link href="/">
                  <Text fontSize={"20"} color="blue.500">
                    user.scientist1
                  </Text>
                </Link>
                <Text fontSize={"18"}>
                  I never heard of this toppic, could you be more specific about
                  how to get those values and results?
                </Text>
              </Flex>
              <Flex bg="gray.200" mt={"10"} direction="column" w="100%">
                <Link href="/">
                  <Text fontSize={"20"} color="blue.500">
                    user.scientist2
                  </Text>
                </Link>
                <Text fontSize={"18"}>
                  Try reading this project about how @user.scientist4 reached a
                  satisfactory result on a similar test.
                </Text>
              </Flex>
              <Flex bg="gray.200" mt={"10"} direction="column" w="100%">
                <Link href="/">
                  <Text fontSize={"20"} color="blue.500">
                    user.scientist3
                  </Text>
                </Link>
                <Text fontSize={"18"}>
                  This is amazing! I ve never think of it that way! this may
                  lead to a great improvement in physics studies.
                </Text>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </>
  );
};

export default ProjectOverview;
