import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import React from "react";
import logo from "../Images/logo.png";
const Footer = () => {
  return (
    <Box
      marginTop={24}
      height="fit-content"
      background={`linear-gradient(to top right, #EDF1FF  55%, transparent 10%)`}
    >
      <Flex justifyContent="space-between" margin={6}>
        <Image
          objectFit="contain"
          width={200}
          height={70}
          src={logo}
          alt="Logo"
        />
        <Button
          borderRadius="2xl"
          backgroundColor="white"
          border="1px"
          padding="2"
          marginTop="2rem"
          width={48}
        >
          Contact Us
        </Button>
      </Flex>
      <Divider
        marginTop="4rem"
        marginLeft={8}
        width="95%"
        border="1px"
        color="#B1B5BB"
      />
      <Box p={8} marginLeft={8}>
        <Flex justify="space-between" align="flex-start">
          <Box width="40%">
            <Flex justify="space-between" align="flex-start">
              <VStack spacing="4" align="flex-start">
                <Text fontWeight="bold" mb={2}>
                  Products
                </Text>
                <VStack align="flex-start">
                  <Text>Item 1</Text>
                  <Text>Item 2</Text>
                  <Text>Item 3</Text>
                  <Text>Item 4</Text>
                  <Text>Item 5</Text>
                </VStack>
              </VStack>
              <VStack spacing="4" align="flex-start">
                <Text fontWeight="bold" mb={2}>
                  Use cases
                </Text>
                <VStack align="flex-start">
                  <Text>Item 1</Text>
                  <Text>Item 2</Text>
                  <Text>Item 3</Text>
                  <Text>Item 4</Text>
                  <Text>Item 5</Text>
                </VStack>
              </VStack>
              <VStack spacing="4" align="flex-start">
                <Text fontWeight="bold" mb={2}>
                  Resources
                </Text>
                <VStack align="flex-start">
                  <Text>Item 1</Text>
                  <Text>Item 2</Text>
                  <Text>Item 3</Text>
                  <Text>Item 4</Text>
                  <Text>Item 5</Text>
                </VStack>
              </VStack>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2} textAlign="right">
              Follow Us
            </Text>
            <HStack>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} />
              <IconButton aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton aria-label="Telegram" icon={<FaTelegram />} />
            </HStack>
          </Box>
        </Flex>
        <Flex justify="space-between" w="100%" mt={16}>
          <Text>&copy; 2024 Your Company Name. All rights reserved.</Text>
          <HStack>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Text>|</Text>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Text>|</Text>
            <Link href="/terms-of-use">Sales and Refund</Link>
            <Text>|</Text>
            <Link href="/privacy-policy">Legal</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
