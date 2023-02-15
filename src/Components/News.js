import React from "react";
import {
  Wrap,
  WrapItem,
  Stack,
  Box,
  Image,
  Text,
  Link,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import moment from "moment";
import { BiCalendar } from "react-icons/bi";
import "../Styles/Content.css";

function News(props) {
  return (
    <div>
      <Wrap alignItems="center">
        <WrapItem>
          <LinkBox flexShrink={0} className="image-container" mt={3}>
            <Image
              className="image"
              borderRadius="lg"
              width={{ md: 670 }}
              src="https://bit.ly/2jYM25F"
            />
            <Box className="overlay" px={10}>
              <Flex align Items="center">
                <BiCalendar />
                <Text fontSize={14} ml={2}>
                  {moment().format("ll")}
                </Text>
              </Flex>
              <LinkOverlay href="#">
                <Heading>News Title 101</Heading>
              </LinkOverlay>
              <Text lineHeight={1.4} mt={6} textAlign="left" pr={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ...
              </Text>
            </Box>
          </LinkBox>
        </WrapItem>
        <WrapItem>
          <Stack display={{ sm: "none", md: "block" }} ml={3}>
            {[...Array(4)].map((e) => {
              return (
                <Box pt={3} display={{ md: "flex" }} w={500}>
                  <Box flexShrink={0}>
                    <Image
                      borderRadius="lg"
                      width={{ md: 36 }}
                      src="https://bit.ly/2jYM25F"
                    />
                  </Box>
                  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Link
                      mt={1}
                      display="block"
                      fontSize="md"
                      lineHeight="normal"
                      fontWeight="semibold"
                      href="#"
                    >
                      Finding customers for your new business
                    </Link>
                    <Flex alignItems="center" mt={2}>
                      <BiCalendar />
                      <Text fontSize={14} ml={2}>
                        {moment().format("ll")}
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </WrapItem>
      </Wrap>
    </div>
  );
}

export default News;
