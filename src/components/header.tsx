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
import { useSession, signIn, signOut } from "next-auth/react";
import { Signika } from "next/font/google";
import Link from "next/link";

const Header = ({
  onChangeInput,
}: {
  onChangeInput?: (value: SetStateAction<string>) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const sessionContext = useSession()
  const handleInput = (e: { target: { value: any } }) => {
    if (onChangeInput){
    const value = e.target.value;
    setInputValue(value);
    onChangeInput(value);
    } 
  };

  console.log(sessionContext.data?.user?.image)
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
        <Link href="/new-project">New project</Link> 
        </Button>
        <Spacer />
        {sessionContext.status === "authenticated"
        ?
        <Flex>
          <Box>
            <Heading size="md" color="white" mb={2}>
              {sessionContext.data?.user?.name}
            </Heading>
            <Heading size="md" color="white" mb={2}>
              {sessionContext.data?.user?.email}
            </Heading>
          </Box>
          <Box ml={8} onClick={() => signOut()}>
            <Avatar src={sessionContext?.data?.user?.image || ""}/>
          </Box>
        </Flex>
        :
          <Box>
            <Heading 
              onClick={() => signIn()} 
              color="white" 
              cursor={"pointer"}
              _hover={{
                textDecor:"underline"
              }}>
              Log in / Register
            </Heading>
          </Box>
        }
        

      </Flex>
    </Box>
  );
};

export default Header;
