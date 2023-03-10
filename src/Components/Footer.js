import {
  Box,
  HStack,
  IconButton,
  Text,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { BsGithub, BsDiscord } from "react-icons/bs";
import logo from "../Assets/logo.png";

function Footer(props) {
  return (
    <Flex alignItems="center" py={5}>
      <Box display="flex" alignItems="center">
        <Image src={logo} alt="" h={10} />
        <Box ml={2} lineHeight={1.4}>
          <Text fontSize={12.3} textTransform="uppercase" fontWeight={600}>
            Western Mindanao State University
          </Text>{" "}
          <Text fontSize={12}>
            Bachelor of Science in Information Technology
          </Text>
        </Box>
      </Box>
      <Spacer />
      <HStack spacing={5} alignItems="flex-">
        <IconButton
          aria-label="facebook"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "gray.50", color: "#a20202" }}
          icon={<MdFacebook size="25px" />}
        />
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "gray.50", color: "#a20202" }}
          icon={<BsGithub size="25px" />}
        />
        <IconButton
          aria-label="discord"
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "gray.50", color: "#a20202" }}
          icon={<BsDiscord size="25px" />}
        />
      </HStack>
    </Flex>
  );
}

export default Footer;
