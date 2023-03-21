import {
  Box,
  SimpleGrid,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../../Api/api";

function Objectives(props) {
  const [list, setList] = useState([]);
  const [vision, setVision] = useState("");

  // const getMission = async () => {
  //   let mission = await api.get("/mission");

  //   if (mission) {
  //     setMission(mission.data[0].description);
  //   }
  // };

  const getData = async () => {
    let response = await api.get("/objectives");

    if (response) {
      let temp = JSON.parse(response.data[0].description);
      setList(temp);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        // spacing={{ sm: 6, lg: 28 }}
        w="100%"
        // mt={14}
      >
        <Box p={10}>
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
            {list.map((el) => {
              return <ListItem>{el.desc}</ListItem>;
            })}
          </UnorderedList>
        </Box>

        <Box bg="gray.100" color="alpha" p={10}>
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
