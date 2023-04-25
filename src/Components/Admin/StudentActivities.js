import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
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
  FormLabel,
  Input,
  Center,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiEditAlt, BiPlus, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import AddActivity from "../../Contents/AddActivity";

function StudentActivities(props) {
  let navigate = useNavigate();
  const drawer = useDisclosure();

  const [data, setData] = useState([]);

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
                {/* <Th>Rank</Th> */}
                <Th>Date</Th>
                <Th>location</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(4)].map((el) => {
                return (
                  <Tr>
                    {/* <Td>
                      <Image borderRadius="full" boxSize="54" />
                    </Td> */}

                    <Td>Activity</Td>
                    <Td>Date</Td>
                    <Td>Location</Td>
                    <Td>
                      <i style={{ fontSize: 12 }}>
                        -- Click edit to view description and images --
                      </i>
                    </Td>
                    <Td>
                      <IconButton
                        onClick={() => {
                          // getFaculty(el.id);
                          navigate("/admin/view-activity/${id}");
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
