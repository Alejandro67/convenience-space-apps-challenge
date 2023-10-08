import {
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Stack,
    Button,
    Box,
    useToast,
  } from "@chakra-ui/react";
  import Footer from "@/components/footer";
  import Header from "@/components/header";
  import { SetStateAction, useState } from "react";
import { ProjectObject } from "@/interfaces/ProjectObject";
import { useSession } from "next-auth/react";
import { Project } from "@/types/Project";
import Category from "@/interfaces/Category";
import { useProjects } from "@/provider/ProjectsProvider";
import { useRouter } from "next/router";
  
  const NewProjectScreen: React.FC = () => {
    const [nameInput, setNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [categoryInput, setCategoryInput] = useState<string[]>([]);
    const [file, setFile] = useState<any>([]);
    const toast = useToast()
    const sessionContext = useSession()
    const projectsContext = useProjects()
    const router = useRouter()
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNameInput(event.target.value);
    };
  
    const handleDescriptionChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setDescriptionInput(event.target.value);
    };
  
    const handleCheckboxChange = (newValues: string[]) => {
      setCategoryInput(newValues);
    };
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.files){
          const selectedFile = event.target.files[0];
        if (selectedFile) {
          setFile(selectedFile.name);
        } else {
          setFile("");
        }
      }
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     /* if(nameInput === "" || !nameInput){
        return toast({
          title:"Error",
          description:"You must provide a name for the project"
        })
      }
      if(categoryInput.length === 0){
        return toast({
          title:"Error",
          description:"You must select at least one category for this project"
        })
      }
      if(descriptionInput === "" || !descriptionInput){
        return toast({
          title:"Error",
          description:"You must provide a description for the project"
        })
      }*/
      event.preventDefault();

      let imageURL = ""
      let communityId = ""

      const newProject = {
        name:nameInput,
        categories:categoryInput,
        about:descriptionInput,
        image: imageURL,
        meta: {
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        communityId: communityId,
      } as ProjectObject

    projectsContext.createProject(newProject)
      .then((createdProject) => {
        /*toast({
          title:"Done",
          description:"Project created successfully"
        })*/
        router.replace(`${process.env.NEXT_PUBLIC_CURRENT_DOMAIN}/projectoverview?id=${createdProject?.id}`)
      }).catch((e) => {
        /*toast({
          title:"Error",
          description:e
        })*/
      })  
    };
  
    return (
      <>
        <Header />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="60vh"
        >
          <Box>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Name of the project</FormLabel>
                <Input
                  backgroundColor={"green.100"}
                  type="text"
                  w="60%"
                  value={nameInput}
                  onChange={handleNameChange}
                />
                <FormLabel>Description</FormLabel>
                <Textarea
                  backgroundColor={"green.100"}
                  value={descriptionInput}
                  onChange={handleDescriptionChange}
                />
                </FormControl>
                <FormLabel>
                  Select the categories that describe the project the most
                </FormLabel>
  
                <CheckboxGroup
                  value={categoryInput}
                  onChange={handleCheckboxChange}
                  colorScheme="green"
                >
                  <Stack spacing={[1, 5]} direction={["column"]}>
                    <Checkbox value="asd">physics</Checkbox>
                    <Checkbox value="chemistry">chemistry</Checkbox>
                    <Checkbox value="biology">biology</Checkbox>
                    <Checkbox value="astrology">astrology</Checkbox>
                    <Checkbox value="geology">geology</Checkbox>
                  </Stack>
                </CheckboxGroup>
                <br />
                <FormControl isRequired>
                <FormLabel>Image input</FormLabel>
  
                <Input onChange={handleFileChange} type="file" />
                </FormControl>
                <Button type="submit" colorScheme="teal" mt={4}>
                  Submit
                </Button>
              
            </form>
          </Box>
          <Footer />
        </Box>
      </>
    );
  };
  
  export default NewProjectScreen;
  