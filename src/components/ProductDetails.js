import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { BsUpload } from "react-icons/bs";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Box>
      <Flex alignItems="center" mb="4">
        <Text mr="2" fontSize={"md"} fontWeight={"bold"}>
          Choose Color:
        </Text>
        <IconButton
          icon={<Box w="24px" h="24px" borderRadius="full" bg="red.500" />}
          onClick={() => handleColorSelect("red")}
          mr="2"
          aria-label="Red"
        />
        <IconButton
          icon={<Box w="24px" h="24px" borderRadius="full" bg="green.500" />}
          onClick={() => handleColorSelect("green")}
          mr="2"
          aria-label="Green"
        />
        <IconButton
          icon={<Box w="24px" h="24px" borderRadius="full" bg="blue.500" />}
          onClick={() => handleColorSelect("blue")}
          aria-label="Blue"
        />
      </Flex>
      <Flex alignItems="center" mb="4">
        <Text mr="2" fontSize={"md"} fontWeight={"bold"}>
          Choose Quantity:
        </Text>
        <Button onClick={handleDecrement} mr="2">
          <MinusIcon />
        </Button>
        <Box>{quantity}</Box>
        <Button onClick={handleIncrement} ml="2">
          <AddIcon />
        </Button>
      </Flex>
      <InputGroup>
        <Input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <Button as="span" colorScheme="blue" mr="2">
          Upload Design
        </Button>
        <InputRightElement>
          <label htmlFor="file-upload">
            <IconButton
              icon={<BsUpload />}
              aria-label="Upload Design"
              variant="outline"
              colorScheme="blue"
            />
          </label>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default ProductDetails;
