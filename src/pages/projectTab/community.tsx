"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

export default function Community() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  // Función para alternar el estado de autenticación
  const toggleAuthentication = () => {
    setUserIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };
  return (
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
          I never heard of this toppic, could you be more specific about how to
          get those values and results?
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
          This is amazing! I've never think of it that way! this may lead to a
          great improvement in physics studies.
        </Text>
      </Flex>
    </Flex>
  );
}
