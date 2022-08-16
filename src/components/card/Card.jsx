import React from "react";
import {
  List,
  UnorderedList,
  ListItem,
  Box,
  Flex,
  Text,
  Image,
  Divider,
  Link,
} from "@chakra-ui/react";

const Card = () => {
  return (
    <Box>
      <Flex>
        <UnorderedList>
          <ListItem>
            <Box display={"flex"}>
              <Link href={"www.google.com"}>
                <Text as={"u"}>Yify Clone</Text>
              </Link>
                <Text>Yify Clone made with React</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={"flex"}>
              <Link href={"www.google.com"}>
                <Text as={"u"}>Yify Clone</Text>
              </Link>
                <Text>Yify Clone made with React</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={"flex"}>
              <Link href={"www.google.com"}>
                <Text as={"u"}>Yify Clone</Text>
              </Link>
                <Text>Yify Clone made with React</Text>
            </Box>
          </ListItem>
          <ListItem>
            <Box display={"flex"}>
              <Link href={"www.google.com"}>
                <Text as={"u"}>Yify Clone</Text>
              </Link>
                <Text>Yify Clone made with React</Text>
            </Box>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default Card;
