import React from "react";
import {
  FormControl,
  Box,
  Input,
  Flex,
  Button,
  Text,
  Image,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import seller from "../Images/seller.png";
const Seller = () => {
  const [input, setInput] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const isError = input === "";

  const handleInputChange = (e) => setInput(e.target.value);
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Flex
        justify={"center"}
        alignItems={"center"}
        width={"35%"}
        height={"420"}
        marginTop={10}
        borderRadius={"xl"}
        border={"solid"}
        borderColor={"white"}
        boxShadow={"2xl"}
      >
        <Box width={"100%"}>
          <Image marginLeft={48} src={seller} alt="img"></Image>
          <Text marginLeft={"10rem"} fontSize={"lg"} as={"b"}>
            Become Packpin Seller
          </Text>
          <FormControl
            marginTop={4}
            width={"100%"}
            borderRadius={"xl"}
            borderColor={"#2B81BD"}
            errorBorderColor={"#2B81BD"}
          >
            <Flex justify={"space-evenly"} padding={2}>
              <Input
                width={"45"}
                padding={2}
                boxShadow={"lg"}
                borderColor={"#2B81BD"}
                type="text"
                placeholder="Name"
                value={input}
              />
              <Input
                width={"45"}
                padding={2}
                boxShadow={"lg"}
                borderColor={"#2B81BD"}
                type="tel"
                placeholder="Phone"
                value={input}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex justify={"space-evenly"} padding={2}>
              <Input
                width={"45"}
                padding={2}
                boxShadow={"lg"}
                borderColor={"#D0D5DD"}
                type="Text"
                placeholder="Business Name"
                value={input}
              />
              <Input
                width={"45"}
                boxShadow={"lg"}
                padding={2}
                borderColor={"#D0D5DD"}
                type="tel"
                placeholder="Business Telephone"
                value={input}
              />
            </Flex>
            <Flex justify={"space-evenly"} padding={2}>
              <Input
                width={"45"}
                padding={2}
                boxShadow={"lg"}
                borderColor={"#D0D5DD"}
                type="Text"
                placeholder="Business GSTIN."
                value={input}
              />
              <Input
                width={"45"}
                boxShadow={"lg"}
                padding={2}
                borderColor={"#D0D5DD"}
                type="tel"
                placeholder="Business Address"
                value={input}
              />
            </Flex>
          </FormControl>
          <Button
            paddingTop={2}
            mt={4}
            marginLeft={12}
            backgroundColor="#2B81BD"
            textColor={"white"}
            type="submit"
            width={"82%"}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Seller;
