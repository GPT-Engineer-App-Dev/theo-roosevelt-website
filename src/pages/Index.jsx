import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="tan" minH="100vh">
      <VStack spacing={8} py={8}>
        {/* Header */}
        <Box bg="darkred" w="100%" py={4}>
          <Heading as="h1" size="2xl" color="white" textAlign="center">
            Theodore Roosevelt
          </Heading>
        </Box>

        {/* Main Content */}
        <Box maxW="3xl" mx="auto" px={8}>
          <Text fontSize="xl">Welcome to the personal website of Theodore Roosevelt</Text>
        </Box>

        {/* Footer */}
        <Box as="footer" w="100%" bg="darkred" py={4} mt="auto">
          <Text color="white" textAlign="center">
            &copy; {new Date().getFullYear()} Theodore Roosevelt. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
