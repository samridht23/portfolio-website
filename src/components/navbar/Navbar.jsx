import React from "react";
import {
  Box,
  Text,
  Flex,
  Stack,
  PopoverTrigger,
  Popover,
  useColorModeValue,
  IconButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  SearchIcon,
  RepeatIcon,
  EditIcon,
  ExternalLinkIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";

const Navbar = () => {
  return (
    <Box position={"relative"} w={"100%"} zIndex={2}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        marginLeft={{ base: 0, md: 12 }}
        marginRight={{ base: 0, md: 12 }}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, lg: 12 }}
        borderBottom={1}
        borderStyle={"solid"}
      >
        <Flex alignItems={"center"} justify={"start"}>
          <Text textAlign={"center"} color={"red"} alignItems={"center"} mr={3}>
            Samridh
          </Text>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} alignItems={"center"}>
          <DesktopNav />
        </Flex>
        <Flex
          flex={{ base: 0, md: 0 }}
          display={{ base: "flex", md: "none" }}
          justify={"flex-end"}
          ml={2}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant={"ghost"}
            />
            <MenuList>
              <MenuItem icon={<AiFillHome />}>Home</MenuItem>
              <MenuItem icon={<AiFillProject />}>Projects</MenuItem>
              <MenuItem icon={<MdQuestionAnswer />}>About</MenuItem>
              <MenuDivider />
              <MenuItem icon={<BsGithub />}>Github</MenuItem>
              <MenuItem icon={<BsTwitter />}>Twitter</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.900", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {/* <Link
                p={1}
                href={navItem.to}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link> */}
              <Link to="/">Home</Link>
              <Link to="/project">project</Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Projects",
    to: "project",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

export default Navbar;
