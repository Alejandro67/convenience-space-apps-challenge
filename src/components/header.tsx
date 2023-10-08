import React, { useState, SetStateAction } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Avatar,
  Text
} from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";
import NextLink from "next/link";
import { useSession, signIn } from "next-auth/react";
import { Signika } from "next/font/google";
import Link from "next/link";

const Header = ({
  onChangeInput,
}: {
  onChangeInput: (value: SetStateAction<string>) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setInputValue(value);
    onChangeInput(value); // Call the callback function with the input value
  };

  const { data: session } = useSession();
  return (
    <Box bg="#49C646" p={4}>
      <Flex alignItems="center" flexWrap="wrap">
        <Heading color="white" size="lg">
          <Button _hover={{ bg: '#49C646',cursor: 'default' }} variant={"ghost"}>
          <Link href="/">
           <Text  fontSize={"2xl"} color={'white'}>OpenSC</Text> 
          </Link>
          </Button>
          
        </Heading>
        <Input
          ml={"3%"}
          textColor={"black"}
          backgroundColor={"white"}
          placeholder="Search"
          width={"80"}
          size="lg"
          value={inputValue}
          onChange={handleInput}
        />
        <Button ml={'2%'} textColor={'white'} background='#358262' _hover={{ bg: '#333',cursor: 'default' }} size='md'>
        <Link href="/category">New project</Link> 
        </Button>
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
