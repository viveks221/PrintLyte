import React from "react";
import { Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
const BestSellers = () => {
  return (
    <Flex padding={4} margin={2}>
      <ProductCard px={5} />
      <ProductCard px={5} />
      <ProductCard px={5} />
    </Flex>
  );
};

export default BestSellers;
