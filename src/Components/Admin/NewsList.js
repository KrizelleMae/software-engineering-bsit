import { Box, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../../Api/api";

function NewsList(props) {
  const [list, setList] = useState([]);

  const getNews = async () => {
    try {
      let response = await api.get("/admin/news.php");

      if (response) {
        setList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, [list]);
  return (
    <div>
      <Box bg="gray.100" h="100%" p={6} borderRadius={5}>
        <Text fontWeight={600} fontSize={20}>
          Recent News
        </Text>
        <UnorderedList mt={5}>
          {list.map((e, k) => {
            return <ListItem mt={3}>{e.NEWS_TITLE}</ListItem>;
          })}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default NewsList;
