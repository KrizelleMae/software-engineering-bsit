import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import About from "../Components/About";
import AcademicPrograms from "../Components/AcademicPrograms";
import Contact from "../Components/Contact";
import Faculty from "../Components/Faculty";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import News from "../Components/News";
import Gallery from "../Components/Gallery";
import Summary from "../Components/Summary";

function Homepage(props) {
  return (
    <Box pr={0} mr={0} style={{ overflowX: "hidden" }} id="home">
      <Navbar />
      <Box pt={16}>
        <Header />
      </Box>
      <Container maxW="container.xl">
        {/* <Box mt={14} py={20} h={200} borderRadius={10} borderWidth={1}>
          <Heading >Header here</Heading>
        </Box> */}
        <Box mt={10}>
          <Summary />
        </Box>
        <Box mt={10} id="news">
          <Heading fontSize={30} mb={3}>
            News
          </Heading>
          <News />
        </Box>

        {/* PROGRAMS */}
        <Box pt={24} id="academic-programs" textAlign="center">
          <Heading fontSize={30} mb={3}>
            Academic Programs
          </Heading>
          <Text color="gray.500">
            College of Computing Studies - BSIT offers the following programs:
          </Text>
          <Center>
            <AcademicPrograms />
          </Center>
        </Box>

        {/* ABOUT */}
        <Box pt={28} id="about">
          <Box mb={14}>
            <Heading fontSize={30} mb={3}>
              About
            </Heading>{" "}
            <Text color="gray.500">
              Mission, Vision, Objectives and Project Outcomes
            </Text>
          </Box>

          <About />
        </Box>

        <Box pt={30} id="activities">
          <Box mb={20}>
            <Heading fontSize={30} mb={2}>
              Student Activities
            </Heading>
            <Text color="gray.500" mb={10}>
              IT Students enjoying the activities for the SY 2022-2023
            </Text>
            <Gallery />
          </Box>
        </Box>

        <Box mt={20} id="faculty">
          <Box mb={14} textAlign="center">
            <Heading fontSize={30} mb={2}>
              Faculty Members
            </Heading>
            <Text color="gray.500" mb={5}>
              Faculty members of BSIT
            </Text>

            <Faculty />
          </Box>
        </Box>
      </Container>

      {/* CONTACT */}
      {/* <Box py={28} bg="" id="contact-us">
          <Contact />
        </Box> */}

      {/* FOOTER */}

      <Box bg="gray.50">
        <Container maxW="container.xl">
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}

export default Homepage;
