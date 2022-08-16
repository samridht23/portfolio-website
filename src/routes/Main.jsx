import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <div>
      <Box>
        <Flex>
          <Navbar />
        </Flex>
        <Flex
          ml={{ base: 10, sm: 12, md: "120px", lg: "250px",xl:"400px" }}
          mr={{ base: 10, sm: 12, md: "120px", lg: "250px" ,xl:"400px"}}
          mt={{ base: "70px", md: "100px" }}
        >
          <Outlet />
        </Flex>
      </Box>
    </div>
  );
};

export default Main;
