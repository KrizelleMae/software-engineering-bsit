import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import Gallery from "../Components/Gallery";
import SupportAndScholar from "../Contents/SupportAndScholar";

function StudentContents(props) {
  return (
    <div>
      <Box mb={20} p={20}>
        <Link href="/"> Go to Homepage</Link>
        <Heading fontSize={30} mb={2} mt={3}>
          Student Activities, Support and Scholarships
        </Heading>
        <Text color="gray.500" mb={10}>
          IT Students enjoying the activities for the SY 2022-2023
        </Text>
        <Gallery />
        <SupportAndScholar />
      </Box>
    </div>
  );
}

export default StudentContents;
