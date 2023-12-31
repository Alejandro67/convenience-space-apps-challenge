"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Link,
  UnorderedList,
} from "@chakra-ui/react";

export default function Files() {
  return (
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

      <Button mt={"4"} p={"4"}>
        Download All
      </Button>
    </Flex>
  );
}
