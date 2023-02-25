import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import About from "../Components/About";
import AcademicPrograms from "../Components/AcademicPrograms";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import News from "../Components/News";
import Summary from "../Components/Summary";

function Homepage(props) {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" pt={10}>
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
        <Box pt={28} textAlign="center" id="academic-programs">
          <Heading fontSize={30} mb={3}>
            Academic Programs
          </Heading>
          <Text color="gray.500">
            College of Computing Studies - BSIT offers the following programs:
          </Text>
          <AcademicPrograms />
        </Box>

        {/* ABOUT */}
        <Box pt={28} id="about">
          <Box textAlign="center" mb={14}>
            <Heading fontSize={30} mb={3}>
              About
            </Heading>{" "}
            <Text color="gray.500">
              Mission, Vision, Objectives and Project Outcomes
            </Text>
          </Box>

          <About />
        </Box>

        {/* CONTACT */}
        <Box pt={28} bg="" id="contact-us">
          <Heading fontSize={30} mb={3}>
            Contact Us
          </Heading>
          <Contact />
        </Box>

        {/* FOOTER */}
      </Container>
      <Box pt={28} bg="#a20202">
        <Container maxW="container.xl">
          <Footer />
        </Container>
      </Box>
    </>
  );
}

export default Homepage;
