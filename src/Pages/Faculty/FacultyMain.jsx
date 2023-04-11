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
import React from "react";
import Feed from "../../Components/Faculty/Feed";
import NewsList from "../../Components/Admin/NewsList";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import SideProfile from "../../Components/Faculty/SideProfile";

function FacultyMain(props) {
  return (
    <Box>
      <Grid templateColumns={"repeat(9, 1fr)"} h={"100vh"}>
        {/* SIDEBAR */}
        <GridItem
          colSpan={{ sm: 0, lg: 2 }}
          background="blue.50"
          borderRadius={10}
        >
          {/* PROFILE */}

          <Box
            pos={{ sm: "auto", lg: "fixed" }}
            align="center"
            pt={"50px"}
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          >
            <SideProfile />
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

              {/* MENU */}
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

          <Stack mt={20} pt={10}>
            <Text mb={3} textTransform="uppercase" fontWeight={600}>
              Recent updates:
            </Text>
            {[...Array(2)].map((e) => {
              return <Feed />;
            })}
          </Stack>
        </GridItem>
        <GridItem colSpan={3}>
          <Box pos="fixed" h="100vh">
            <NewsList />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default FacultyMain;
