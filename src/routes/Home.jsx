import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Flex>
        <Text fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
          Product Designer creating thoughtful, intutive interfaces
        </Text>
      </Flex>
    </Box>
  );
};

export default Home;
