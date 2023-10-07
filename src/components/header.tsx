import React, { useState } from "react";
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
import {useSession, signIn} from "next-auth/react"
import { Signika } from "next/font/google";

const Header: React.FC = ({ onChangeInput }) => {

  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setInputValue(value);
    onChangeInput(value); // Call the callback function with the input value
  };



  const {data:session} = useSession()
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
          value={inputValue}
          onChange={handleInput}
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
        <Box ml={8} onClick={() => signIn()}>
          <Avatar />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
