import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
// import bsit from "../Assets/bsit.jpg";

function Summary(props) {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        spacing={{ md: 8, lg: 8 }}
        w="100%"
        mt={7}
      >
        {[...Array(4)].map((el) => {
          return (
            <Box
              m={{ sm: 1, lg: 0 }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Box p="8" lineHeight={1.7}>
                <b>THE</b>
                <Text fontSize={18}>College of Computer Studies has </Text>
                <Heading fontSize="5xl"> 1203</Heading> for the{" "}
                <b>
                  <i>school-year</i> 2023
                </b>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Summary;
