import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Image,
  Box,
  Text,
  Icon,
  Flex,
  Heading,
  Select,
} from "@chakra-ui/react";
import Rating from "./Rating";
import VerifiedTag from "./VerifiedTag";
import ProductDetails from "./ProductDetails";
const BuyNowDrawer = (props) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      finalFocusRef={props.btnRef}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Flex>
            <Image
              width={"25%"}
              borderRadius={"lg"}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            ></Image>
            <Box width={"75%"}>
              <Box display={"flex"}>
                <Text fontSize={"xs"} padding={2} color={"#999999"}>
                  {" "}
                  Seller : Packpin Pvt ltd.
                </Text>
                <Rating rating={4.5} />
                <VerifiedTag />
              </Box>
              <Text padding={2} fontSize={"md"}>
                Boki Ecom Parcel Corrugated Box Colour- Brown, (Pack of 100)
                8x4x3in
              </Text>
              <Text padding={2} fontSize={"lg"}>
                $ 7865
              </Text>
            </Box>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <Flex>
            <label htmlFor="select1">
              <Text
                fontSize={"md"}
                padding={2}
                marginTop={2}
                fontWeight={"bold"}
              >
                Choose Size:-
              </Text>
            </label>
            <Select
              width={"50%"}
              borderRadius={"xl"}
              id="select1"
              padding={2}
              placeholder="Select option"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <ProductDetails />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BuyNowDrawer;
