import {
  Box,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Objectives(props) {
  return (
    <div>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ sm: 6, lg: 28 }}
        w="100%"
        mt={14}
      >
        <Box>
          <Text fontSize={22} fontWeight={600}>
            Objectives
          </Text>
          <Text
            fontStyle="italic"
            mt={5}
            fontWeight={400}
            textAlign="justify"
            fontSize="sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit:
          </Text>
          <UnorderedList mt={5} fontSize="sm">
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Text fontSize={22} fontWeight={600}>
            Program Outcomes
          </Text>

          <Text
            fontStyle="italic"
            mt={5}
            fontWeight={400}
            textAlign="justify"
            fontSize="sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Objectives;
