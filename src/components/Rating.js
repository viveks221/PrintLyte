import { useState, useEffect } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

const Rating = ({ rating }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Calculate the number of full stars
    const fullStars = Math.floor(rating);
    // Check if there's a half star
    const halfStar = rating % 1 !== 0;
    // Create an array of full stars
    const fullStarsArray = Array(fullStars).fill(
      <StarIcon boxSize={3.5} color="yellow.400" />
    );
    // Add a half star if necessary
    if (halfStar) {
      fullStarsArray.push(<StarIcon boxSize={3.5} color="yellow.400" />);
    }
    // Calculate the number of empty stars
    const emptyStars = 5 - fullStarsArray.length;
    // Create an array of empty stars
    const emptyStarsArray = Array(emptyStars).fill(
      <StarIcon boxSize={3.5} color="gray.400" />
    );
    // Combine full stars and empty stars arrays
    const starsArray = [...fullStarsArray, ...emptyStarsArray];
    // Set the stars state
    setStars(starsArray);
  }, [rating]);

  return (
    <Flex marginTop={"-2px"}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </Flex>
  );
};

export default Rating;
