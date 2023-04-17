import React, { useState } from "react";
import { Box, Center, Image, Text, VStack, Link } from "@chakra-ui/react";
import "../../Styles/Links.css";

function StudentProfilePage({ side }) {
  return (
    <Box>
      <Box align="center">
        <Image
          boxSize="150px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          borderRadius={8}
        />
        <VStack mt={5} spacing={2}>
          <Text fontSize={20} color="alpha.800" fontWeight={500}>
            John Rupert Sierra
          </Text>
          <Text fontSize={14} color="gray.500">
            Rank / Designation
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default StudentProfilePage;
