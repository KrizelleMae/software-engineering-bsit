import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../Api/api";

function LinkList(props) {
  const [data, setData] = useState([]);
  const getList = async () => {
    let response = await api.get(`/linkAccess/1`);

    setData(response.data);
  };

  useEffect(() => {
    getList();
  }, [data]);

  return (
    <Box width={"100vh"}>
      <Heading fontSize={"2xl"} fontWeight={600} mb={10}>
        LINKS
      </Heading>

      {data.map((el) => {
        return (
          <>
            <Box bg="gray.50" p={4} my={3}>
              <Text fontWeight={600}>{el.link_name}</Text>
              <Text my={3}>
                DESCRIPTION: <br />
                {el.link_description}
              </Text>
              <Flex alignItems={"center"}>
                <Text>Link: </Text>
                <Link
                  ml={1}
                  href={el.link}
                  target="_blank"
                  fontStyle={"italic"}
                  color="orange"
                >
                  {el.link}
                </Link>
              </Flex>
            </Box>
          </>
        );
      })}
    </Box>
  );
}

export default LinkList;
