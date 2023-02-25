import { Box, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function MissionVision() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={{ sm: 6, lg: 28 }}
      w="100%"
      mt={10}
    >
      <Box>
        <Text fontSize={22} fontWeight={600}>
          Mission
        </Text>

        <Text
          fontStyle="italic"
          mt={5}
          fontWeight={400}
          textAlign="justify"
          fontSize="sm"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </Box>

      <Box>
        <Text fontSize={22} fontWeight={600}>
          Vision
        </Text>

        <Text
          fontStyle="italic"
          mt={5}
          fontWeight={400}
          textAlign="justify"
          fontSize="sm"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export default MissionVision;
