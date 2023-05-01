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
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  return (
    <Box>
      <Box align="center">
        <Avatar boxSize={150} src="https://bit.ly/tioluwani-kolawole">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <VStack mt={5} spacing={2}>
          <Text fontSize={20} color="alpha.800" fontWeight={500}>
            {user?.fname + " " + user?.mi + ". " + user?.lname}
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
