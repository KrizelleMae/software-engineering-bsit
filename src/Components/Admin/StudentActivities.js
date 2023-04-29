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
import Swal from "sweetalert2";
import { toast } from "react-toastify";

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
        let response = await api.delete(`/link/${id}`);
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
                        moment(el.date_started).format("ll")
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
