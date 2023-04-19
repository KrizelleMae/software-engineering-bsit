import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  HStack,
  Box,
  useColorModeValue,
  Button,
  Heading,
  VStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Stack,
  Badge,
  Divider,
  SimpleGrid,
  Link,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import api from "../Api/api";
import FacultyDrawer from "./Popups/FacultyDrawer";

function Faculty(props) {
  const [list, setList] = useState([]);
  const [id, setId] = useState("");

  const getFaculty = async () => {
    let response = await api.get("/faculty");
    setList(response.data);
  };

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="10px" />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getFaculty();
    }, 1000);

    // cleanup function to clear the interval when the component unmounts or the interval changes
    return () => clearInterval(intervalId);
  }, [id]);
  return (
    <div>
      {/* <Center>
        <SimpleGrid
          columns={{ sm: 1, base: 2, md: 2, lg: 1 }}
          spacing={{ sm: 6, lg: 20 }}
          mt={7}
          align="center"
          mb={5}
        >
          {list.map((el) => {
            return (
              <Box
                w={{ sm: 250, lg: 270 }}
                as={Link}
                // onClick={() => {
                //   setOverlay(<OverlayOne />);
                //   onOpen();
                // }}
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  borderRadius="xl"
                  boxSize="200"
                  w="100%"
                  h="270"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&s"
                />
                <Heading
                  pt={3}
                  fontSize={"xl"}
                  fontWeight={500}
                  fontFamily={"body"}
                >
                  Prof. Roderick P. Go
                </Heading>
                <Text color={"gray.500"} fontSize={14} fontStyle="italic">
                  Director of the College of Computer Studies
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Center> */}

      {/* FACULTIES */}
      <Center>
        <SimpleGrid
          columns={
            list.length < 4 ? { sm: 3 } : { sm: 1, base: 2, md: 3, lg: 4 }
          }
          spacing={{ sm: 6, lg: 10 }}
          mt={7}
          align="center"
        >
          {list.map((el, key) => {
            return (
              <Box
                w={{ sm: 250, lg: 270 }}
                as={Link}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  setId(el.id);
                  onOpen();
                }}
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  borderRadius="xl"
                  boxSize="200"
                  w="100%"
                  h="270"
                  src={el.image}
                />
                <Heading
                  pt={3}
                  fontSize={"xl"}
                  fontWeight={500}
                  fontFamily={"body"}
                >
                  {el.fname + " " + el.lname}
                </Heading>
                <Text color={"gray.500"} fontSize={14} fontStyle="italic">
                  {el.designation}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Center>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <FacultyDrawer id={id} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Faculty;
