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
  Link,
} from "@chakra-ui/react";

export default function Community() {
  return (
    <Flex direction="column">
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
      <Flex bg="grey.500" mt={"10"} direction="column" w="100%">
        <Link fontSize={"20"} color="blue.500">
          user.name
        </Link>
        <Text fontSize={"18"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum?
          Obcaecati ut animi delectus cupiditate esse itaque. Quis, tempora
          similique!
        </Text>
      </Flex>
    </Flex>
  );
}
