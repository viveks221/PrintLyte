import React, { useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Text,
  TableContainer,
  useColorModeValue,
  Icon,
  Button,
  Image,
  VStack,
  HStack,
  Grid,
  Divider,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import offer1 from "../Images/offer1.png";
import offer2 from "../Images/offer2.png";
import offer3 from "../Images/offer3.png";
import offer from "../Images/offer.png";

const Checkout = () => {
  const [primaryImage, setPrimaryImage] = useState(offer);

  // Function to handle image selection
  const handleImageSelect = (newImage) => {
    setPrimaryImage(newImage);
  };

  const averageRating = 4.0;
  const totalRatings = [10, 20, 30, 40, 50].sort((a, b) => b - a);
  const starColor = useColorModeValue("yellow.400", "yellow.300");
  const textColor = useColorModeValue("green.500", "green.300");

  // Calculate filled stars and remaining fractional part
  const filledStars = Math.floor(averageRating);
  const hasHalfStar = averageRating - filledStars >= 0.5;

  // Total number of ratings
  const totalRatingsCount = totalRatings.reduce((acc, val) => acc + val, 0);
  return (
    <>
      <Box>
        <Grid templateColumns="1fr 2fr" gap={8}>
          <Box>
            <Image
              height={250}
              width="300"
              src={primaryImage}
              alt="Primary product"
            />
            <HStack spacing={4} mt={4}>
              {/* Replace src with actual image paths */}
              <Image
                src={offer2}
                alt="Thumbnail 1"
                onClick={() => handleImageSelect(offer2)}
                boxSize="100px"
                cursor="pointer"
              />
              <Image
                src={offer1}
                alt="Thumbnail 2"
                onClick={() => handleImageSelect(offer1)}
                boxSize="100px"
                cursor="pointer"
              />
              <Image
                src={offer3}
                alt="Thumbnail 3"
                onClick={() => handleImageSelect(offer3)}
                boxSize="100px"
                cursor="pointer"
              />
              {/* Add more thumbnail images as needed */}
            </HStack>
          </Box>
          <Box>
            {/* Product title, description, select color, select size, etc. */}
            <h1>Product Title</h1>
            <p>Description of the product...</p>
            <Box>{/* Color selection options */}</Box>
            <Box>{/* Size selection options */}</Box>
            <Button colorScheme="blue">Add to Cart</Button>
            <Button colorScheme="teal">Proceed to Checkout</Button>
          </Box>
        </Grid>
      </Box>
      <Box backgroundColor="#D9D9D9" borderRadius="xl" boxShadow="xl">
        <Tabs>
          <TabList>
            <Tab fontWeight="bold">Product Description</Tab>
            <Tab fontWeight="bold">Company Details</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex>
                <TableContainer
                  width="40%"
                  borderRadius="xl"
                  boxShadow="xl"
                  backgroundColor="white"
                  margin="2"
                >
                  <Table variant="striped">
                    <Tbody>
                      <Tr>
                        <Td>Dimension</Td>
                        <Td>10*6*7 (mm)</Td>
                      </Tr>
                      <Tr>
                        <Td>Number of Ply</Td>
                        <Td>8</Td>
                      </Tr>
                      <Tr>
                        <Td>Paper Density</Td>
                        <Td>150 GSM</Td>
                      </Tr>
                      <Tr>
                        <Td>Material</Td>
                        <Td>Paper</Td>
                      </Tr>
                      <Tr>
                        <Td>Shape</Td>
                        <Td>Rectangle</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Text width="60%" margin="2">
                  {" "}
                  Boki 5x4x2.5 inch 3 Ply Paper Brown Rectangular Corrugated
                  Box, ABS093 (Pack of 100) is a premium quality product from
                  ABS. Moglix is a well-known ecommerce platform for qualitative
                  range of Corrugated Boxes. All ABS 5x4x2.5 inch 3 Ply Paper
                  Brown Rectangular Corrugated Box, ABS093 (Pack of 100) are
                  manufactured by using quality assured material and advanced
                  techniques, which make them up to the standard in this highly
                  challenging field. The materials utilized to manufacture ABS
                  5x4x2.5 inch 3 Ply Paper Brown Rectangular Corrugated Box,
                  ABS093 (Pack of 100), are sourced from the most reliable and
                  official vendors, chosen after performing detailed market
                  surveys. ABS products are widely acknowledged in the market
                  for their high quality. We are dedicatedly involved in
                  providing an excellent quality array of Boki corrugated boxes.
                </Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box margin="2">
        <Text fontWeight="bold" fontSize="20">
          {" "}
          Ratings and Reviews
        </Text>
        <Text fontSize="14">
          {" "}
          Boki Ecom Parcel Corrugated Box Colour- Brown, (Pack of 100) 8x4x3in
        </Text>
        <Flex margin="2" alignItems="center">
          {/* Numeric rating */}
          <Box>
            <Text color={textColor} fontWeight="bold" fontSize="2xl" ml={5}>
              {averageRating.toFixed(1)}
            </Text>
            {/* Filled stars */}
            <Flex color={starColor}>
              {[...Array(filledStars)].map((_, index) => (
                <Icon key={index} as={FaStar} />
              ))}
              {/* Half star */}
              {hasHalfStar && <Icon as={FaStar} />}
            </Flex>
          </Box>

          {/* Empty stars */}
          <Flex color="gray.500" marginTop="9">
            {[...Array(5 - filledStars - (hasHalfStar ? 1 : 0))].map(
              (_, index) => (
                <Icon key={index} as={FaStar} />
              )
            )}
          </Flex>

          {/* Ratings breakdown */}
          <Box ml={2} mr={1}>
            {totalRatings.map((count, index) => (
              <Box key={index} width="200px" position="relative">
                <Flex>
                  <Text
                    marginRight="-1"
                    color={textColor}
                    fontSize="sm"
                    textAlign="center"
                  >
                    {count}
                  </Text>
                  <Flex>
                    <Box
                      w={`${(count / totalRatingsCount) * 100}%`}
                      h={4}
                      bg={textColor}
                      borderRadius="full"
                      zIndex={1}
                      position="absolute"
                      marginLeft={4}
                    />
                    <Box
                      position="absolute"
                      w="100%"
                      h={4}
                      bg="#D9D9D9"
                      borderRadius="full"
                      marginLeft={4}
                    />
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Box>
        </Flex>
        <Divider color="#d9d9d9" border="1px" />
        <Flex margin={2}>
          <Flex color={starColor}>
            {[...Array(filledStars)].map((_, index) => (
              <Icon marginTop="1" key={index} as={FaStar} fontSize="22" />
            ))}
            {/* Half star */}
            {hasHalfStar && <Icon as={FaStar} />}
          </Flex>

          {/* Empty stars */}
          <Flex color="gray.500">
            {[...Array(5 - filledStars - (hasHalfStar ? 1 : 0))].map(
              (_, index) => (
                <Icon marginTop="1" key={index} as={FaStar} fontSize="22" />
              )
            )}
          </Flex>
          <Text fontSize={20} marginLeft={4} color="grey">
            |
          </Text>
          <Text fontSize={18} marginLeft={4} marginTop="1" color="green">
            Verified Purchase
          </Text>
        </Flex>
        <Text marginLeft={3}> Vivek Kumar</Text>
        <Text fontSize="xs" color="#d9d9d9" marginLeft={3}>
          {" "}
          January 03,2024
        </Text>
        <Text marginLeft={3}>Great Product , Must Recommended</Text>
        <Box width="20%">
          <Text fontSize="xs" color="#d9d9d9" marginLeft={3}>
            {" "}
            are sourced from the most reliable and official vendors, chosen
            after performing detailed market surveys. ABS products are widely
            acknowledged in the market for their high quality.
          </Text>
        </Box>
        <Divider color="#d9d9d9" border="1px" />
        <Flex margin={2}>
          <Flex color={starColor}>
            {[...Array(filledStars)].map((_, index) => (
              <Icon marginTop="1" key={index} as={FaStar} fontSize="22" />
            ))}
            {/* Half star */}
            {hasHalfStar && <Icon as={FaStar} />}
          </Flex>

          {/* Empty stars */}
          <Flex color="gray.500">
            {[...Array(5 - filledStars - (hasHalfStar ? 1 : 0))].map(
              (_, index) => (
                <Icon marginTop="1" key={index} as={FaStar} fontSize="22" />
              )
            )}
          </Flex>
          <Text fontSize={20} marginLeft={4} color="grey">
            |
          </Text>
          <Text fontSize={18} marginLeft={4} marginTop="1" color="green">
            Verified Purchase
          </Text>
        </Flex>
        <Text marginLeft={3}> Vivek Kumar</Text>
        <Text fontSize="xs" color="#d9d9d9" marginLeft={3}>
          {" "}
          January 03,2024
        </Text>
        <Text marginLeft={3}>Great Product , Must Recommended</Text>
        <Box width="20%">
          <Text fontSize="xs" color="#d9d9d9" marginLeft={3}>
            {" "}
            are sourced from the most reliable and official vendors, chosen
            after performing detailed market surveys. ABS products are widely
            acknowledged in the market for their high quality.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
