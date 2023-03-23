import React, { useEffect, useState } from "react";
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
import api from "../Api/api";

function News(props) {
  const [list, setList] = useState([]);
  const [first, setFirst] = useState([]);

  const getData = async () => {
    let response = await api.get("/news");

    if (response) {
      setList(response.data);
      setFirst(response.data[0]);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Wrap alignItems="center">
        <WrapItem>
          <LinkBox flexShrink={0} className="image-container" mt={3}>
            <Image
              className="image"
              borderRadius="lg"
              width={{ md: 670 }}
              height={{ md: "470px" }}
              src={first.image}
            />
            <Box className="overlay" px={10}>
              <Flex align Items="center">
                <BiCalendar />
                <Text fontSize={14} ml={2}>
                  {moment(first.created_at).format("ll")}
                </Text>
              </Flex>
              <LinkOverlay href="#">
                <Heading>{first.title}</Heading>
              </LinkOverlay>
              <Text lineHeight={1.4} mt={6} textAlign="left" pr={10}>
                {first.description}...
              </Text>
            </Box>
          </LinkBox>
        </WrapItem>
        <WrapItem>
          <Stack display={{ sm: "none", md: "block" }} ml={3}>
            {list.map((e) => {
              return (
                <Box pt={3} display={{ md: "flex" }} w={500}>
                  <Box flexShrink={0}>
                    <Image
                      borderRadius="lg"
                      width={{ md: "150px" }}
                      src={e.image}
                      height={{ md: "100px" }}
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
                      {e.title}
                    </Link>
                    <Flex alignItems="center" mt={2}>
                      <BiCalendar />
                      <Text fontSize={14} ml={2}>
                        {moment(e.created_at).format("ll")}
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
