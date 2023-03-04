import {
  Box,
  FormControl,
  FormLabel,
  Flex,
  Input,
  Textarea,
  Button,
  VStack,
  Divider,
  Heading,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";

function Contact(props) {
  return (
    <div>
      <Box display={{ lg: "flex" }} bg="#a20202">
        <Box width={{ md: "50%" }} bg="gray.50" p={10} h="auto">
          <Heading fontSize={30} mb={10}>
            Contact Us
          </Heading>
          <Box display="flex">
            <FormControl mr={3}>
              <FormLabel>Full name</FormLabel>
              <Input type="text" bg="white" />
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type="text" bg="white" />
            </FormControl>
          </Box>
          <FormControl mt={3}>
            <FormLabel>Message</FormLabel>
            <Textarea rows={4} bg="white" />
          </FormControl>

          <FormControl id="name" mt={5} align="right">
            <Button
              variant="solid"
              colorScheme="blue"
              rightIcon={<BiMailSend />}
              fontWeight={400}
            >
              Send Message
            </Button>
          </FormControl>
        </Box>

        <VStack
          mx={{ lg: 10, md: 10, sm: 5 }}
          pl={0}
          spacing={3}
          alignItems="flex-start"
          color="white"
          display={{ md: "none" }}
        >
          <Button
            as={Link}
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            _hover={{ textDecoration: "none", color: "red" }}
            leftIcon={<MdPhone color="white" size="20px" />}
          >
            +639-123-5678
          </Button>
          <Button
            as={Link}
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            _hover={{ textDecoration: "none", color: "red" }}
            leftIcon={<MdEmail color="white" size="20px" />}
          >
            ICS@wmsu.ph
          </Button>
          <Button
            as={Link}
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            _hover={{ textDecoration: "none", color: "red" }}
            leftIcon={<MdLocationOn color="white" size="20px" />}
          >
            Baliwasan, Phil
          </Button>
          <Divider />
        </VStack>
      </Box>
    </div>
  );
}

export default Contact;
