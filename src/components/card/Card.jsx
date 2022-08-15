import React from "react";
import { Box, Flex, Text, Image, Divider } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box>
      <Flex w={"315px"}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default Card;
