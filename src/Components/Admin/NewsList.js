import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
      <Box bg="gray.100" h="100%" p={6} borderRadius={5}>
        <Text fontWeight={600} fontSize={20}>
          Recent News
        </Text>
        <UnorderedList mt={5}>
          {list.map((e, k) => {
            return <ListItem mt={3}>{e.title}</ListItem>;
          })}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default NewsList;
