import {
  Box,
  FormControl,
  FormLabel,
  Flex,
  Input,
  FormHelperText,
  Textarea,
  HStack,
  Button,
  IconButton,
  VStack,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

function Contact(props) {
  return (
    <div>
      <Flex mt={10}>
        <Box width="50%">
          <Box display="flex">
            <FormControl mr={3}>
              <FormLabel>Full name</FormLabel>
              <Input type="text" />
            </FormControl>{" "}
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type="text" />
            </FormControl>
          </Box>
          <FormControl mt={3}>
            <FormLabel>Message</FormLabel>
            <Textarea rows={4} />
          </FormControl>

          <FormControl id="name" float="right" mt={5}>
            <Button variant="solid" rightIcon={<BiSend />}>
              Send Message
            </Button>
          </FormControl>
        </Box>

        <VStack
          mx={{ lg: 10, md: 10, sm: 5 }}
          pl={0}
          spacing={3}
          alignItems="flex-start"
        >
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="gray"
            _hover={{ border: "2px solid #a20202" }}
            leftIcon={<MdPhone color="#a20202" size="20px" />}
          >
            +639-123-5678
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="gray"
            _hover={{ border: "2px solid #a20202" }}
            leftIcon={<MdEmail color="#a20202" size="20px" />}
          >
            ICS@wmsu.ph
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="gray"
            _hover={{ border: "2px solid #a20202" }}
            leftIcon={<MdLocationOn color="#a20202" size="20px" />}
          >
            Baliwasan, Phil
          </Button>
          <Divider />
        </VStack>
      </Flex>
    </div>
  );
}

export default Contact;
