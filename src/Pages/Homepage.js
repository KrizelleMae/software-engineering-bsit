import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import News from "../Components/News";

function Homepage(props) {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Box mt={10}>
          <Heading fontSize={30} mb={3}>
            News
          </Heading>
          <News />
        </Box>

        {/* CONTACT */}
        <Box mt={16} bg="">
          <Heading fontSize={30} mb={3}>
            Contact Us
          </Heading>
          <Contact />
        </Box>

        {/* FOOTER */}
      </Container>
      <Box mt={16} bg="#a20202">
        <Container maxW="container.xl">
          <Footer />
        </Container>
      </Box>
    </>
  );
}

export default Homepage;
