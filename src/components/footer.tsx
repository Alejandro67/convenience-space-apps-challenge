import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box
      bg="#333"
      color="white"
      p={4}
      textAlign="center"
      position="fixed" // Set to "sticky" if you want a sticky footer
      bottom="0"
      left="0"
      width="100%"
    >
      &copy; {new Date().getFullYear()} Convenience++
    </Box>
  );
};

export default Footer;
