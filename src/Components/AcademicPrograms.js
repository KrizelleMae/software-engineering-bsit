import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import bsit from "../Assets/bsit.jpg";

function AcademicPrograms(props) {
  return (
    <Box mt={5}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ sm: 6, lg: 8 }}
        w={{ sm: 350, lg: 700 }}
        mt={7}
      >
        {[...Array(2)].map((el) => {
          return (
            <Box borderWidth="1px" overflow="hidden" p={5} borderRadius="base">
              <Box h={250}>
                <Image src={bsit} h="100%" w="100%" />
              </Box>

              <Box py={3} textAlign="left">
                <Text fontWeight={600} letterSpacing="wide" fontSize="md">
                  Bachelor of Science in Information Technology
                </Text>
                <Text fontSize="xs" mt={5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Text>

                <Box align="right">
                  <Button
                    size="sm"
                    rightIcon={<BiChevronRight />}
                    mt={5}
                    variant="ghost"
                    colorScheme="red"
                  >
                    See more
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default AcademicPrograms;
