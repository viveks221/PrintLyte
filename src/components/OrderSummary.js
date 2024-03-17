import React, { useState } from "react";
import {
  Box,
  Step,
  StepIndicator,
  useSteps,
  Stepper,
  StepIcon,
  StepStatus,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Flex,
  Center,
  Text,
  Input,
  Image,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { BiSolidDiscount } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
const OrderSummary = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalGST, setTotalGST] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Calculate the total amount
  const calculateTotal = () => {
    const total = totalAmount + totalGST + shipping - couponDiscount;
    return total.toFixed(2);
  };
  const steps = [
    { description: "Shipping Details" },
    { description: "Payment Details" },
  ];
  const [quantity, setQuantity] = useState(1);

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Center boxShadow="xl" height="32" padding={6}>
        <Box padding={6} width="50%">
          <Stepper size="lg" index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
      </Center>
      <Flex width="100%" height="100vh" padding={6} backdropBlur={50}>
        {/* Left side (40%) */}
        <Box width="45%" padding={4}>
          <Box boxShadow="xl" borderRadius="2xl" margin={6}>
            <Text fontWeight="bold" mb={4}>
              Shipping Address
            </Text>
            <Flex mb={4}>
              <Input borderColor="#2B81BD" placeholder="Full Name" mr={4} />
              <Input borderColor="#2B81BD" placeholder="Phone Number" />
            </Flex>
            <Input borderColor="#2B81BD" placeholder="Email ID" mb={4} />
            <Input borderColor="#2B81BD" placeholder="Adress" mb={4} />

            <Flex mb={4}>
              <Input borderColor="#2B81BD" placeholder="Landmark" mr={4} />
              <Input borderColor="#2B81BD" placeholder="Pincode" />
            </Flex>
            <Flex>
              <Input borderColor="#2B81BD" placeholder="State" mr={4} />
              <Input borderColor="#2B81BD" placeholder="Country" />
            </Flex>
          </Box>

          <Box
            width="100%"
            boxShadow="xl"
            borderRadius="2xl"
            height="200"
            marginTop="5rem"
          >
            <Text fontWeight="bold" margin="2">
              {" "}
              Available Shipping Method{" "}
            </Text>
            <Flex
              height="3rem"
              justify="space-between"
              boxShadow="xl"
              borderRadius="2xl"
              width="90%"
              backgroundColor="#EBEBEB"
              marginLeft="4"
              margin={4}
            >
              <Flex width="50%" justify="space-between">
                <Box
                  backgroundColor="white"
                  height="2rem"
                  widht="2rem"
                  margin="2"
                  borderRadius="md"
                >
                  <MdLocalShipping color="grey" size="34" />
                </Box>
                <Text
                  fontWeight="bold"
                  marginTop="2"
                  marginRight="2"
                  fontSize="14"
                >
                  {" "}
                  Standard Delivery
                </Text>
              </Flex>
              <Flex width="25%">
                <Text margin="2"> Free </Text>
                <Checkbox marginBottom="1" />
              </Flex>
            </Flex>
            <Flex
              height="3rem"
              justify="space-between"
              boxShadow="xl"
              borderRadius="2xl"
              width="90%"
              backgroundColor="#EBEBEB"
              marginLeft="4"
            >
              <Flex width="50%" justify="space-between">
                <Box
                  backgroundColor="white"
                  height="2rem"
                  widht="2rem"
                  margin="2"
                  borderRadius="md"
                >
                  <FaShippingFast color="grey" size="34" />
                </Box>
                <Text
                  fontWeight="bold"
                  marginTop="2"
                  marginRight="2"
                  fontSize="14"
                >
                  {" "}
                  Fast Delivery
                </Text>
              </Flex>
              <Flex width="25%">
                <Text margin="2"> Free </Text>
                <Checkbox marginBottom="1" />
              </Flex>
            </Flex>
          </Box>
        </Box>

        {/* Right side (60%) */}
        <Flex width="60%" padding={2} flexDirection="column">
          {/* Top part (70%) */}
          <Flex boxShadow="xl" borderRadius="2xl" padding={2} marginTop={12}>
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
              </Box>
              <Text padding={2} fontSize={"md"}>
                Boki Ecom Parcel Corrugated Box Colour- Brown, (Pack of 100)
                8x4x3in
              </Text>
              <Flex justifyContent="space-between" mb="4">
                <Text padding={2} fontSize={"lg"}>
                  $ 7865
                </Text>
                <Box display="flex" mr="10">
                  <Text padding={3} fontSize={"md"}>
                    Choose Quantity:
                  </Text>
                  <MinusIcon
                    margin={4}
                    onClick={handleDecrement}
                    cursor="pointer"
                  />
                  <Box margin={3}>{quantity}</Box>
                  <AddIcon
                    margin={4}
                    onClick={handleIncrement}
                    cursor="pointer"
                  />
                  <DeleteIcon margin={4} />
                </Box>
              </Flex>
            </Box>
          </Flex>

          {/* Bottom part (30%) */}
          <Flex height="30%">
            {/* Left part (50%) */}
            <Box
              width="50%"
              height="fit-content"
              boxShadow="xl"
              padding={2}
              margin={2}
              marginTop={12}
              borderRadius="2xl"
            >
              <Text fontSize="lg" fontWeight="Bold">
                Discounts
              </Text>
              <Text margin={2} fontSize="xs" color="#99999">
                {" "}
                Select Coupon
              </Text>
              <Box
                borderStyle="dashed"
                height="50%"
                borderColor="green"
                borderWidth="2px"
                margin={2}
              >
                <Box display="flex">
                  <BiSolidDiscount size={24} color="green" />
                  <Text fontWeight="bold">Pack10</Text>
                </Box>
                <Center>
                  <Text fontSize="x-small">
                    {" "}
                    Flat 10% OFF on the corrugated boxes | Max discount Rs. 300
                  </Text>
                </Center>
                <Button
                  padding={2}
                  marginBottom={2}
                  width="100%"
                  height="6"
                  color="green"
                >
                  Apply
                </Button>
              </Box>
              <Box
                borderStyle="dashed"
                height="50%"
                borderColor="green"
                borderWidth="2px"
                margin={2}
              >
                <Box display="flex">
                  <BiSolidDiscount size={24} color="green" />
                  <Text fontWeight="bold">Pack10</Text>
                </Box>
                <Center>
                  <Text fontSize="x-small">
                    {" "}
                    Flat 10% OFF on the corrugated boxes | Max discount Rs. 300
                  </Text>
                </Center>
                <Button
                  padding={2}
                  marginBottom={2}
                  width="100%"
                  height="6"
                  color="green"
                >
                  Apply
                </Button>
              </Box>
              <Box>
                <Text> Promo Code</Text>
                <Input borderStyle="dashed" borderWidth="2px" />
                <Button borderRadius="lg" margin={2}>
                  {" "}
                  Apply
                </Button>
              </Box>
            </Box>

            {/* Right part (50%) */}
            <Box
              width="60%"
              padding={2}
              boxShadow="xl"
              borderRadius="2xl"
              height="fit-content"
              marginTop={2}
            >
              <Box p={4}>
                <Text fontWeight="bold" mb={4}>
                  Billing Details
                </Text>
                <Flex mb={4} justify="space-between">
                  <Text>Total Amount:</Text>
                  <Text ml={4}>{totalAmount}</Text>
                </Flex>
                <Flex justify="space-between" mb={4}>
                  <Text>Total GST:</Text>
                  <Text ml={4}>{totalGST}</Text>
                </Flex>
                <Flex justify="space-between" mb={4}>
                  <Text>Shipping:</Text>
                  <Text ml={4}>{shipping}</Text>
                </Flex>
                <Flex justify="space-between" mb={4}>
                  <Text>Coupon Discount:</Text>
                  <Text ml={4}>{couponDiscount}</Text>
                </Flex>
                <Flex justify="space-between" mb={4}>
                  <Text>Total:</Text>
                  <Text ml={4}>{calculateTotal()}</Text>
                </Flex>
                <Flex flexDirection="column">
                  <Button colorScheme="blue" mr={4} margin={2}>
                    Proceed
                  </Button>
                  <Button margin={2} colorScheme="blue">
                    Continue Shopping
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default OrderSummary;
