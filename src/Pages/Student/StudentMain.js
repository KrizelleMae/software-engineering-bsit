import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Feed from "../../Components/Faculty/Feed";
import NewsList from "../../Components/Admin/NewsList";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import SideProfile from "../../Components/SideProfile";

function StudentMain(props) {
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
    {
      name: "Downloadables",
      href: "/faculty-downloadables",
    },
  ]);
  return (
    <div>
      <Grid templateColumns={"repeat(9, 1fr)"} h={"100vh"}>
        {/* SIDEBAR */}
        <GridItem
          colSpan={{ sm: 0, lg: 2 }}
          background="gray.100"
          borderRadius={10}
        >
          {/* PROFILE */}

          <Box
            pos={{ sm: "auto", lg: "fixed" }}
            align="center"
            pt={"50px"}
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          >
            <SideProfile side={side} />
          </Box>
        </GridItem>

        {/*  */}
        <GridItem colSpan={4} px={10}>
          <Box zIndex={10}>
            <HStack
              pos="fixed"
              zIndex={10}
              w={600}
              backgroundColor="white"
              h="80px"
              py={12}
              ml={-1}
            >
              <InputGroup>
                <InputLeftElement>
                  <BiSearch fontSize="18" />
                </InputLeftElement>
                <Input placeholder="Search" borderRadius={50} />
                <InputRightElement w="auto">
                  <Button size="xs" mx={2} borderRadius={50}>
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
              MENU
              <Menu>
                <MenuButton as={Button} rightIcon={<BiChevronDown />} size="sm">
                  Filter by{" "}
                </MenuButton>
                <MenuList>
                  <MenuItem>Memorandum</MenuItem>
                  <MenuItem>Order</MenuItem>
                  <MenuItem>News</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>

          <Stack mt={20} pt={10}></Stack>
        </GridItem>
      </Grid>
    </div>
  );
}

export default StudentMain;
