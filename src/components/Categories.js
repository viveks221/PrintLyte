import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Divider,
  List,
  ListIcon,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <Box
      w={230}
      height={550}
      border={"solid"}
      borderRadius={"lg"}
      padding={2}
      backgroundColor={"#D9D9D9"}
    >
      <Stack spacing="1" p="2">
        <Heading size="md">Categories</Heading>
        <Divider border="2px" color="white" />
        <List fontSize="xl" spacing={5}>
          <Link to="packaging">
            <ListItem display="flex" justifyContent="space-between">
              <Text>Packaging</Text>
              <ListIcon
                backgroundColor="white"
                borderRadius="50%"
                color="grey"
                marginTop="0.5rem"
                as={ChevronRightIcon}
              />
            </ListItem>
          </Link>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Caary Bags</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Cards</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Cups</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Flex</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Graphics</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>

          <ListItem display="flex" justifyContent="space-between">
            <Text>Lorem</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Lorem</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Lorem</Text>
            <ListIcon
              backgroundColor="white"
              borderRadius="50%"
              color="grey"
              marginTop="0.5rem"
              as={ChevronRightIcon}
            />
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default Categories;
