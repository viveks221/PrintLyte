import React, { useRef, useState } from "react";
import { cart } from "./Icon";
import {
  Flex,
  Image,
  Icon,
  Stack,
  Heading,
  Button,
  Text,
  Card,
  CardBody,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import AddToCartDrawer from "./BuyNowDrawer";
import Rating from "./Rating";
import VerifiedTag from "./VerifiedTag";
const ProductCard = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();
  const buyNowHandler = () => {
    setopenDrawer(true);
  };
  return (
    <Card
      borderRadius={"xl"}
      width="fit-content"
      height="fit-content"
      backgroundColor={"#f0f0f0"}
    >
      <CardBody width={"100%"} height={"100%"} margin={2}>
        <Box marginLeft={-5} marginTop={-4}>
          <Image
            objectFit={"cover"}
            height={235}
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Box>
        <Box marginLeft={-4}>
          <Heading size="md">Sofa</Heading>

          <Box display={"flex"}>
            <Text margin={"2px"} fontSize={"xs"} color={"#999999"}>
              {" "}
              By: Packpin Pvt ltd.
            </Text>
            <Rating rating={4.5} />
          </Box>
          <Flex justify={"space-between"} align={"start"} marginTop={-4}>
            <Text px={1} mt={5} color="black.400" fontSize="2xl">
              $450
            </Text>
            <Icon
              mt={6}
              px="1"
              marginLeft={8}
              fontSize={34}
              objectFit={"cover"}
              as={cart}
              cursor={"pointer"}
            />

            <Button
              p={1}
              size={"xs"}
              mt={7}
              variant="solid"
              colorScheme="blue"
              onClick={onOpen}
              ref={btnRef}
            >
              Buy now
            </Button>
          </Flex>
        </Box>
      </CardBody>
      <AddToCartDrawer onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </Card>
  );
};

export default ProductCard;
