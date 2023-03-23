import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../../Api/api";

function MissionVision() {
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");

  const getMission = async () => {
    let mission = await api.get("/mission");

    if (mission) {
      setMission(mission.data[0].description);
    }
  };

  const getVision = async () => {
    let vision = await api.get("/vision");

    if (vision) {
      setVision(vision.data[0].description);
    }
  };

  useEffect(() => {
    getMission();
    getVision();
  }, []);
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      // spacing={{ sm: 6, lg: 28 }}
      w="100%"
      // mt={10}
    >
      <Box bg="gray.100" color="alpha" p={10}>
        <Text fontSize={22} fontWeight={600}>
          Mission
        </Text>

        {/* <Text
          fontStyle="italic"
          mt={5}
          fontWeight={400}
          textAlign="justify"
          fontSize="sm"
        > */}
        <Text
          fontStyle="italic"
          mt={5}
          fontWeight={400}
          textAlign="justify"
          fontSize="sm"
        >
          {mission}
        </Text>
        {/* <span
          style={{
            fontStyle: "italic",
            mt: 5,
            fontWeight: 400,
            textAlign: "justify",
            fontSize: "15px",
          }}
        >
          {mission} */}
        {/* </span> */}
        {/* </Text> */}
      </Box>

      <Box p={10}>
        <Text fontSize={22} fontWeight={600}>
          Vision
        </Text>

        <Text
          fontStyle="italic"
          mt={5}
          fontWeight={400}
          textAlign="justify"
          fontSize="sm"
        >
          {vision}
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export default MissionVision;
