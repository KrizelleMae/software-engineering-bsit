import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import bsit from "../Assets/bsit.jpg";

function AcademicPrograms(props) {
  return (
    <Box align="center">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ sm: 6, lg: 8 }}
        w="100%"
        mt={7}
        align="center"
      >
        {[...Array(2)].map((el) => {
          return (
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={bsit} />

              <Box p="6">
                <Text
                  fontWeight={900}
                  letterSpacing="wide"
                  fontSize="lg"
                  textAlign="center"
                >
                  Bachelor of Science in Information Technology
                </Text>
                <Text fontSize="xs" mt={5} px={8}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>

                <Button size="sm" rightIcon={<BiChevronRight />} mt={8}>
                  See more
                </Button>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default AcademicPrograms;
