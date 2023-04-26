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
import React, { useState } from "react";
import { BiEditAlt, BiPlus, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function StudentSupport(props) {
  let navigate = useNavigate();
  const drawer = useDisclosure();

  return (
    <div>
      <Box mt={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize="2xl">Student Support </Heading>{" "}
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
                <Th>Image</Th>
                <Th>Organization </Th>
                <Th>Description</Th>
                <Th>Head</Th>
                <Th>Address</Th>
                <Th>Contact</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(4)].map((el) => {
                return (
                  <Tr>
                    {/* <Td>
                      <Image borderRadius="full" boxSize="54" />
                    </Td> */}

                    <Td>Image</Td>
                    <Td>Organization name</Td>

                    <Td>
                      <i style={{ fontSize: 12 }}>
                        -- Click edit to view description and images --
                      </i>
                    </Td>

                    <Td>John Doe</Td>
                    <Td>WMSU Campus A</Td>
                    <Td>09876787657</Td>
                    {/* <Td>
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
                    </Td> */}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default StudentSupport;
