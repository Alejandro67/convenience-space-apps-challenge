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
  } from "@chakra-ui/react";
  import Footer from "@/components/footer";
  import Header from "@/components/header";
  import { SetStateAction, useState } from "react";
import { NewProject } from "@/interfaces/NewProject";
  
  const NewProjectScreen: React.FC = () => {
    const [nameInput, setNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [categoryInput, setCategoryInput] = useState<string[]>([]);
    const [file, setFile] = useState<any>([]);
  
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
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile.name);
      } else {
        setFile("");
      }
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const ProjectObject:NewProject = {
        name:nameInput,
        categories:categoryInput,
        description:descriptionInput,
        file:file,
      }
      console.log(ProjectObject);
      
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
                    <Checkbox value="physics">physics</Checkbox>
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
  