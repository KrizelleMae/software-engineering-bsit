import {
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
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiEditAlt, BiPlus, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import AddActivity from "../../Contents/AddActivity";
import api from "../../Api/api";
import moment from "moment";

function StudentActivities(props) {
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
          <Heading fontSize="2xl">Student Activities </Heading>{" "}
          <Box align="right" my={2}>
            <Button
              colorScheme="green"
              size="sm"
              leftIcon={<BiPlus />}
              onClick={() => drawer.onOpen()}
            >
              Add activity
            </Button>
          </Box>
        </Flex>

        <TableContainer border={"1px solid #eee"} mt={8}>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Activity </Th>
                <Th>Description</Th>
                <Th>Date</Th>
                <Th>location</Th>

                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => {
                return (
                  <Tr>
                    {/* <Td>
                      <Image borderRadius="full" boxSize="54" />
                    </Td> */}

                    <Td>{el.activity_name}</Td>
                    <Td>
                      <i style={{ fontSize: 12 }}>
                        -- Click edit to view description and images --
                      </i>
                    </Td>
                    <Td>
                      {el.date_started === el.date_ended ? (
                        el.date_started
                      ) : (
                        <>
                          {moment(el.date_started).format("ll")}
                          {" - "}
                          {moment(el.date_ended).format("ll")}
                        </>
                      )}
                    </Td>
                    <Td>{el.location}</Td>

                    <Td>
                      <IconButton
                        onClick={() => {
                          // getFaculty(el.id);
                          navigate(`/admin/view-activity/${el.id}`);
                        }}
                        size="sm"
                        colorScheme={"blue"}
                        mr={2}
                        icon={<BiEditAlt />}
                      />

                      <IconButton
                        onClick={() => {
                          delete "id";
                        }}
                        size="sm"
                        colorScheme={"red"}
                        icon={<BiTrash />}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      {/* ADD ACTIVITY DRAWER */}{" "}
      <Drawer
        size={"xl"}
        isOpen={drawer.isOpen}
        placement="right"
        onClose={drawer.onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add new activity</DrawerHeader>

          <DrawerBody>
            <Box p={5}>
              <AddActivity />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default StudentActivities;
