import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import "./styles/homestyle.scss";
import Card from "../components/card/Card";
import { FiGithub, FiTwitter } from "react-icons/fi";

const Home = () => {
  return (
    <Box pt={12}>
      <Flex>
        <Text as={"b"} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
          A software enthusiast with a passion for technology.
        </Text>
      </Flex>
      <Text mt={12} mb={12} fontSize={{ base: "lg" }}>
        Hey, I'm Samridh, a software enthusiast. I have a huge passion for
        technology and everything related to software development. I am a
        self-taught programmer and love tinkering with technology.
      </Text>
      <Text mt={12} mb={12} fontSize={{ base: "lg" }}>
        You can follow along with my work, personal projects and occasional
        insights into my life on{" "}
        <Link href="https://twitter.com/Samridh38242336" isExternal>
          <Text as={"u"}>Twitter</Text>
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/samridht23" isExternal>
          <Text as={"u"}>Github</Text>
        </Link>
        .
      </Text>
      <Flex mt={12} mb={12} alignItems={"center"}>
        <Link href="https://twitter.com/Samridh38242336" isExternal mr={8}>
          <FiTwitter />
        </Link>{" "}
        <Link href="https://github.com/samridht23" isExternal mr={8}>
          <FiGithub />
        </Link>{" "}
        <Link
          href="mailto:samridht23@gmail.com"
          text-decoration={"none"}
          mr={8}
        >
          <Box
            border={"1px"}
            borderColor={"gray.400"}
            borderRadius={"100px"}
            bg={"gray.100"}
            transition={"0.5s ease-in-out"}
            _hover={{ bg: "gray.200" }}
          >
            <Box p={2}>
              <Text fontSize={"14px"} color={"gray.900"}>
                Email me
              </Text>
            </Box>
          </Box>
        </Link>{" "}
      </Flex>
      <Box mt={12} mb={12}>
        <Divider />
      </Box>
      <Box>
        <Box>
          <Flex>
            <Text fontSize={{ base: "xl", md: "2xl" }} as={"u"}>
              Projects
            </Text>
          </Flex>
          <Flex mt={2} mb={12}>
            <Text fontSize={{ base: "sm", sm: "md" }}>
              A showcase for things I've done.
            </Text>
          </Flex>
          <Flex>
            <Card />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

const CardValue = [
  {
    id: 1,
    desc: "here is sample description",
  },
];
export default Home;
