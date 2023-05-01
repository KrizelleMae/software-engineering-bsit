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
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BiEditAlt, BiPlus, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import AddScholarship from "./AddScholarship";
import api from "../Api/api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
// import api from "../../Api/api";

function StudentScholarship(props) {
  let navigate = useNavigate();
  const drawer = useDisclosure();
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await api.get(`/scholar`);

    if (response) {
      setData(response.data);
    }
  };
  const destroy = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await api.delete(`/scholar/${id}`);
        if (response.status === 200) {
          toast
            .success("Successfully deleted", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            .then((e) => {
              window.location.reload(false);
            });
        } else {
          toast.error("Error occurred. Please try again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    });
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div>
      <Box mt={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize="2xl">Student Scholarship </Heading>{" "}
          <Box align="right" my={2}>
            <Button
              colorScheme="green"
              size="sm"
              leftIcon={<BiPlus />}
              onClick={() => drawer.onOpen()}
            >
              Add Scholarship
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
                {/* <Th>Head</Th> */}
                <Th>Contact</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length === 0 ? (
                <Tr>
                  <Td colSpan={5} textAlign="center" py={6}>
                    No data found
                  </Td>
                </Tr>
              ) : (
                data.map((el) => {
                  return (
                    <Tr>
                      {/* <Td>
                      <Image borderRadius="full" boxSize="54" />
                    </Td> */}

                      <Td>
                        {
                          <Image
                            src={JSON.parse(el.image)[0]}
                            sx={{ height: 10 }}
                          />
                        }
                      </Td>
                      <Td>{el.name}e</Td>

                      <Td>
                        <i style={{ fontSize: 12 }}>
                          -- Click edit to view description and images --
                        </i>
                      </Td>

                      {/* <Td>John Doe</Td> */}

                      <Td>{el.contact}</Td>
                      <Td>
                        <IconButton
                          onClick={() => {
                            destroy(el.id);
                          }}
                          size="sm"
                          colorScheme={"red"}
                          icon={<BiTrash />}
                        />
                      </Td>
                    </Tr>
                  );
                })
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Drawer
        size={"xl"}
        isOpen={drawer.isOpen}
        placement="right"
        onClose={drawer.onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Add new Scholarship
          </DrawerHeader>
          <DrawerBody>
            <Box p={5}>
              <AddScholarship />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default StudentScholarship;
