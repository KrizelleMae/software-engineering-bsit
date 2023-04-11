import React, { useState } from "react";
import { Box, Center, Image, Text, VStack, Link } from "@chakra-ui/react";
import "../../Styles/Links.css";

function SideProfile(props) {
  const [side, setSide] = useState([
    {
      name: "Feed",
      href: "/faculty",
      active: true,
    },
    {
      name: "My Profile",
      href: "/profile",
    },
    {
      name: "Account Settings",
      href: "/settings",
    },
  ]);
  return (
    <Box>
      <Box px={{ sm: 0, lg: 24 }}>
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

      <Box pt={10}>
        {side.map((e) => {
          return (
            <Link _hover={{ textDecoration: "none" }}>
              <Box
                className={e.active ? "active" : ""}
                my={3}
                width="100%"
                py={3}
                textTransform="uppercase"
                color="gray"
                fontSize={15}
                _hover={{
                  bg: "white",
                  color: "black",
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
