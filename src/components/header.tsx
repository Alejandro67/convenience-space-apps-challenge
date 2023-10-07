import React from 'react';
import { Box, Flex, Link, Heading, Button, Spacer, Avatar } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header: React.FC = () => {
    return (
        <Box bg="#49C646" p={4}>
          <Flex alignItems="center" flexWrap="wrap">
            <Heading color="white" size="lg">
              My Next.js App
            </Heading>
            <Spacer />
            <Box>
              <Heading size="md" color="white" mb={2}>
                lol
              </Heading>
              <Heading size="md" color="white" mb={2}>
                lol
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