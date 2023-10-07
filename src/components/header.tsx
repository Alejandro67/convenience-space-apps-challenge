import React from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  Button,
  Spacer,
  Avatar,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import NextLink from "next/link";

const Header: React.FC = () => {
  return (
    <Box bg="#49C646" p={4}>
      <Flex alignItems="center" flexWrap="wrap">
        <Heading color="white" size="lg">
          OpenSC
        </Heading>
        <Input
          ml={"5%"}
          textColor={"black"}
          backgroundColor={"white"}
          placeholder="Search"
          width={"80"}
          size="lg"
        />
        <Spacer />
        <Box>
          <Heading size="md" color="white" mb={2}>
            Username
          </Heading>
          <Heading size="md" color="white" mb={2}>
            Meta
          </Heading>
        </Box>
        <Box ml={8}>
          <Avatar />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
