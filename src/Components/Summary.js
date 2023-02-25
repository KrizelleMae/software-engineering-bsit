import {
  background,
  Badge,
  Box,
  Center,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import bsit from "../Assets/bsit.jpg";

function Summary(props) {
  return (
    <Box align="center">
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={{ md: 8, lg: 8 }}
        w="100%"
        mt={7}
        align="center"
      >
        {[...Array(4)].map((el) => {
          return (
            <Box
              m={{ sm: 1, lg: 0 }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box p="6">Bachelor</Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Summary;
