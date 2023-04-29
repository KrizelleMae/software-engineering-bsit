import React, { useState } from "react";
import {
  Box,
  Center,
  Image,
  Text,
  VStack,
  Link,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import "../../Styles/Links.css";

function StudentProfilePage({ side }) {
  return (
    <Box>
      <Box align="center">
        <Avatar boxSize={150} src="https://bit.ly/tioluwani-kolawole">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
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
