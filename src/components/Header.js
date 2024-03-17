import React, { useState } from "react";
import logo from "../Images/logo.png";
import { loginIcon, sellerIcon, bulkIcon, cart } from "./Icon";

import {
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  ListIcon,
  List,
  ListItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };
  return (
    <Box m={1} pb={10}>
      <Flex
        boxSize="lg"
        width={"100%"}
        display="flex"
        justify="space-between"
        height={30}
      >
        <Image
          objectFit="contain"
          width={200}
          height={70}
          src={logo}
          alt="Logo"
        />
        <InputGroup width={"40%"} height={70} m={4}>
          <InputRightElement pointerEvents="pointer">
            <SearchIcon onClick={handleSearch} />
          </InputRightElement>
          <Input
            bgColor={"#EDEDED"}
            type="search"
            placeholder="Search Products, Categories, Brands"
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
        <List margin={5} display="flex" cursor="pointer">
          <Link to="login">
            <ListItem px={4} display={"flex"}>
              <ListIcon as={loginIcon} fontSize={30} />
              <Text>Login/Sign Up</Text>
            </ListItem>
          </Link>
          <Link to={"enquiry"}>
            <ListItem px={4} display={"flex"}>
              <ListIcon as={bulkIcon} fontSize={30} />
              <Text>Bulk Enquiry</Text>
            </ListItem>
          </Link>

          <Link to={"seller"}>
            <ListItem px={4} display={"flex"}>
              <ListIcon as={sellerIcon} fontSize={30} />
              <Text>Become a seller</Text>
            </ListItem>
          </Link>

          <Link to={"cart"}>
            <ListItem px={2} display={"flex"}>
              <ListIcon as={cart} fontSize={34} />
            </ListItem>
          </Link>
        </List>
      </Flex>
    </Box>
  );
};

export default Header;
