import { Flex, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const VerifiedTag = () => {
  return (
    <Flex
      alignItems="center"
      bg="#009645"
      color="white"
      borderRadius="lg"
      height={5}
      paddingLeft={2}
      marginTop={2}
      marginLeft={4}
      justify={"space-between"}
      width={16}
    >
      <Text fontSize="xs">Verified</Text>
      <CheckCircleIcon boxSize={3} />
    </Flex>
  );
};

export default VerifiedTag;
