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
} from "@chakra-ui/react";
import api from "../../Api/api";

function FacultyDrawer(props) {
  const { isOpen, onClose } = useDisclosure();

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [designation, setDesignation] = useState("");

  const getFaculty = async () => {
    let response = await api.get(`/faculty/${props.id}`);
    setName(
      response.data.fname + " " + response.data.mi + " " + response.data.lname
    );
    setImage(response.data.image);
    setDesignation(response.data.designation);
    let parsed = JSON.parse(response.data.qualifications);
    setList(parsed);
  };

  useEffect(() => {
    getFaculty();
  }, [props.id]);

  return (
    <div>
      <DrawerBody mt={7}>
        <Center>
          <Image
            isCentered
            borderRadius="xl"
            boxSize="200"
            w={250}
            h={250}
            src={image}
          />
        </Center>

        <Heading
          isCentered
          pt={30}
          fontSize={"xl"}
          fontWeight={500}
          fontFamily={"body"}
        >
          {name}
        </Heading>
        {/* <Text color={"gray.500"}>Rank</Text> */}

        <Text color={"gray.700"}>{designation}</Text>

        <Heading
          isCentered
          pt={10}
          fontSize={"lg"}
          fontWeight={500}
          fontFamily={"body"}
          mt={2}
        >
          Educational Qualifications:
        </Heading>
        <UnorderedList>
          {list.map((r) => {
            return <ListItem mt={3}>{r.desc}</ListItem>;
          })}
        </UnorderedList>
      </DrawerBody>
    </div>
  );
}

export default FacultyDrawer;
