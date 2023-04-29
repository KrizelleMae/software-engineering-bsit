import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Navbar";
import Gallery from "../Components/Gallery";
import Navbar from "../Components/Navbar";

function Activities(props) {
  return (
    <Box pr={0} mr={0} style={{ overflowX: "hidden" }}>
      <Navbar />
      <Box pt={16}>
        <Header />
      </Box>

      <Box pt={20}>
        <Container>Student Activities</Container>
        <Gallery />
      </Box>
    </Box>
  );
}

export default Activities;
