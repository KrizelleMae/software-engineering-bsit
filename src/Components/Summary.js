import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
// import bsit from "../Assets/bsit.jpg";

function Summary(props) {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        // spacing={{ md: 8, lg: 8 }}
        w="100%"
        // border="1px solid #a20202"
        py={10}
      >
        {[...Array(4)].map((el, key) => {
          return (
            <Box
              // m={{ sm: 1, lg: 0 }}

              // borderRadius="lg"
              overflow="hidden"
              // boxShadow="md"
              bg={key === 0 || key === 2 ? "#a20202" : "gray.100"}
              color={key === 0 || key === 2 ? "white" : "#a20202"}
            >
              <Box p={9} lineHeight={1.7}>
                <b>THE</b>
                <Text fontSize={18}>College of Computer </Text>
                <Heading fontSize="3xl"> 1203</Heading> for the{" "}
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
