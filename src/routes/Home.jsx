import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Box>
        <Flex>
          <Navbar />
        </Flex>
        <Outlet />
      </Box>
    </div>
  );
};

export default Home;
