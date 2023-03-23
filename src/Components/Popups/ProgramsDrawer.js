import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  Heading,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  UnorderedList,
  ListItem,
  useDisclosure,
  Box,
  Flex,
} from "@chakra-ui/react";
import api from "../../Api/api";
import { BiNotepad, BiPaperclip } from "react-icons/bi";

function ProgramsDrawer(props) {
  const { isOpen, onClose } = useDisclosure();

  const [data, setData] = useState([]);
  // const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const getData = async () => {
    let response = await api.get(`/programs/${props.id}`);
    setName(response.data.title);
    setImage(response.data.image);
    setDesc(response.data.description);
  };

  useEffect(() => {
    getData();
  }, [props.id]);

  return (
    <div>
      <DrawerBody mt={7}>
        <Center>
          <Image
            isCentered
            borderRadius="xl"
            boxSize="200"
            w={"100%"}
            h={350}
            src={image}
          />
        </Center>

        <Box pt={30}>
          <Flex>
            <BiNotepad /> <small style={{ marginLeft: 2 }}> Program name</small>
          </Flex>{" "}
          <Heading
            mt={1}
            isCentered
            fontSize={"xl"}
            fontWeight={600}
            textTransform="uppercase"
            fontFamily={"body"}
          >
            {name}
          </Heading>
        </Box>

        {/* <Text color={"gray.500"}>Rank</Text> */}

        {/* <Text color={"gray.700"}>{designation}</Text> */}

        <Text
          isCentered
          pt={8}
          fontSize={"md"}
          fontWeight={400}
          fontFamily={"body"}
          mt={2}
        >
          {desc}
        </Text>
      </DrawerBody>
    </div>
  );
}

export default ProgramsDrawer;
