import {
  Box,
  ListItem,
  UnorderedList,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { BiCalendarAlt } from "react-icons/bi";
import api from "../../Api/api";

function NewsList(props) {
  const [list, setList] = useState([]);

  const getNews = async () => {
    try {
      let response = await api.get("/news");

      if (response) {
        setList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getNews();
    }, 1000);

    // cleanup function to clear the interval when the component unmounts or the interval changes
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <Box
        bg="gray.50"
        h="100%"
        p={6}
        borderRadius={5}
        overflow="hidden"
        mt={2}
      >
        <Text fontWeight={600} fontSize={20}>
          Recent news
        </Text>
        <Box mt={5}>
          {list.map((e, k) => {
            return (
              <>
                <Flex
                  mt={2}
                  bg={"white"}
                  p={3}
                  boxShadow="base"
                  borderRadius={"md"}
                >
                  <Image src={e.image} h={"70px"} w={"70px"} />
                  <Box ml={2} alignItems="center">
                    <Text fontSize={"sm"} fontWeight={"regular"}>
                      {e.title}
                    </Text>
                    <Box display={"flex"} mt={1}>
                      <BiCalendarAlt />
                      <Text fontSize={"xs"} ml={1}>
                        {moment(e.created_at).format("ll")}
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export default NewsList;
