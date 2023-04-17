import React, { useState } from "react";
import { Box, Center, Image, Text, VStack, Link } from "@chakra-ui/react";
import "../Styles/Links.css";

function SideProfile({ side }) {
  return (
    <Box background={"gray.100"} h={"100vh"} pt={"50px"}>
      <Box px={{ sm: 0, lg: 20 }}>
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

      <Box pt={10} pr={5}>
        {side.map((e) => {
          return (
            <Link _hover={{ textDecoration: "none" }}>
              <Box
                className={e.active ? "active" : ""}
                my={3}
                width="100%"
                py={4}
                textTransform="uppercase"
                color="gray.500"
                fontSize={16}
                _hover={{
                  bg: "white",
                  color: "black",
                  borderRightRadius: "50px",
                }}
              >
                {e.name}
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default SideProfile;
