import React from "react";
import Categories from "./Categories";
import { Box, Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Offers from "./Offers";

const Home = () => {
  return (
    <Box marginTop={2} paddingTop={4}>
      <Flex padding={2} margin={2} width="100%">
        <Categories />
        <Offers />
      </Flex>
      <Flex overflowX="hidden" padding={2} margin={4}>
        <ProductCard padding={2} margin={4} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Box>
  );
};

export default Home;
