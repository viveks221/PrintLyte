import React, { useState } from "react";
import {
  FormControl,
  Box,
  Input,
  Flex,
  Button,
  Text,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [input, setInput] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Flex
        justify={"center"}
        alignItems={"start"}
        width="25%"
        height="fit-content"
        marginTop={10}
        borderRadius={"xl"}
        border={"solid"}
        borderColor={"white"}
        boxShadow={"2xl"}
        padding={4}
      >
        <Box>
          <Text margin={2} fontSize={"2xl"} as="b">
            Create an Account
          </Text>
          <FormControl marginTop={4} borderRadius={"xl"}>
            <Input
              borderColor={"#D0D5DD"}
              type="email"
              placeholder="Email Address"
              value={input}
              onChange={handleInputChange}
            />

            <InputGroup paddingTop={2} borderColor={"#D0D5DD"}>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input type="tel" placeholder="phone number" />
            </InputGroup>
            <InputGroup paddingTop={2} borderColor={"#D0D5DD"} size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement paddingTop={4} width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              paddingTop={2}
              mt={4}
              backgroundColor="#2B81BD"
              textColor={"white"}
              type="submit"
              width={"100%"}
            >
              Submit
            </Button>
          </FormControl>
          <Text
            marginTop={6}
            paddingLeft={28}
            textColor={"black"}
            fontSize={"md"}
            as="b"
          >
            OR
          </Text>
          <VStack>
            <Button
              width={"100%"}
              colorScheme="facebook"
              leftIcon={<FaFacebook />}
            >
              Facebook
            </Button>
            <Button width={"100%"} leftIcon={<FcGoogle />}>
              Google
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
