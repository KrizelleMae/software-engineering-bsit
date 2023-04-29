import {
  useColorModeValue,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  Avatar,
  Text,
  Link,
  HStack,
  Stack,
  FormLabel,
  FormControl,
  Switch,
  Badge,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiEditAlt, BiShowAlt, BiPlus, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import api from "../../Api/api";
import moment from "moment";

function StudentTable(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  const drawer = useDisclosure();

  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await api.get(`/activity`);

    if (response) {
      setData(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box mt={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize="2xl">Student Informations</Heading>{" "}
        </Flex>
        <TableContainer border={"1px solid #eee"} mt={8}>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Complete Name </Th>
                <Th>Batch</Th>
                <Th>Adviser</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => {
                return (
                  <Tr>
                    {/* <Td>
                      <Image borderRadius="full" boxSize="54" />
                    </Td> */}

                    <Td>{(el.fname, el.lname, el.mname)} full name</Td>
                    <Td>{el.batch} 1999</Td>
                    <Td>{el.adviser} Prof. Arip</Td>
                    <Td>{el.email}jtuban4@gmail.com</Td>
                    <Td>{el.password} crucru123</Td>
                    <Td>
                      <HStack>
                        <IconButton
                          size="lg"
                          colorScheme={"blue"}
                          onClick={onOpen}
                          icon={<BiShowAlt />}
                        >
                          Show
                        </IconButton>
                        <FormControl display="flex" alignItems="center">
                          <FormLabel>Graduated</FormLabel>
                          <Switch size="lg" colorScheme="red" />
                        </FormControl>
                      </HStack>
                      {/* <IconButton
                        onClick={() => {
                          // getFaculty(el.id);
                          navigate(`/admin/view-activity/${el.id}`);
                        }}
                        size="sm"
                        colorScheme={"blue"}
                        mr={2}
                        icon={<BiEditAlt />}
                      /> */}

                      {/* <IconButton
                        onClick={() => {
                          delete "id";
                        }}
                        size="sm"
                        colorScheme={"red"}
                        icon={<BiTrash />}
                      /> */}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      {/* ADD ACTIVITY DRAWER */}{" "}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Student View</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Box
                bg={useColorModeValue("white", "gray.900")}
                rounded={"lg"}
                textAlign={"center"}
              >
                <Avatar
                  size={"xl"}
                  src={
                    "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  }
                  alt={"Avatar Alt"}
                  mb={4}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: "green.300",
                    border: "2px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  Tuban, James karl C.
                </Heading>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                  @jtuban143
                </Text>
                <HStack>
                  <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                  >
                    Batch
                  </Text>
                  <Text>2020</Text>
                </HStack>

                <Stack
                  align={"center"}
                  justify={"center"}
                  direction={"row"}
                  mt={6}
                >
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    #art
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    #photography
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue("gray.50", "gray.800")}
                    fontWeight={"400"}
                  >
                    #music
                  </Badge>
                </Stack>
              </Box>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default StudentTable;
