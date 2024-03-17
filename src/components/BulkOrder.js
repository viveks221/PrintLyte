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
import bulkOrder from "../Images/bulkOrder.png";
const BulkOrder = () => {
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
        height={"450"}
        marginTop={10}
        borderRadius={"xl"}
        border={"solid"}
        borderColor={"white"}
        boxShadow={"2xl"}
      >
        <Box width={"100%"}>
          <Image marginLeft={48} src={bulkOrder} alt="img"></Image>
          <Text marginLeft={32} fontSize={"lg"} as={"b"}>
            Get the best quote for Bulk Orders
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
                type="email"
                placeholder="Email Address"
                value={input}
              />
              <Input
                width={"45"}
                boxShadow={"lg"}
                padding={2}
                borderColor={"#D0D5DD"}
                type="select"
                placeholder="Product type"
                value={input}
              />
            </Flex>
          </FormControl>
          <Textarea
            marginTop={2}
            boxShadow={"lg"}
            marginLeft={12}
            width={"82%"}
            padding={4}
            placeholder="Remark"
          />
          <Button
            paddingTop={2}
            mt={4}
            backgroundColor="#2B81BD"
            textColor={"white"}
            type="submit"
            width={"82%"}
            ml={12}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BulkOrder;
