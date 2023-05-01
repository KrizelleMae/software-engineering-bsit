import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Admin/Sidebar";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Button,
  Image,
  Text,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  Box,
  Link,
  Modal,
  ModalOverlay,
  DrawerFooter,
  Badge,
} from "@chakra-ui/react";
import { BsEye, BsFilePdf, BsFiletypeDocx } from "react-icons/bs";
import AddSurvey from "../../Contents/AddSurvey";
import api from "../../Api/api";
import moment from "moment";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import MemoModal from "../../Components/Popups/MemoModal";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function SurveyLink(props) {
  const drawer = useDisclosure();
  const modal = useDisclosure();

  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const getList = async () => {
    let response = await api.get(`/link`);
    setData(response.data);
  };

  useEffect(() => {
    getList();
  }, [data]);

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

  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="content">
          <div className="content-wrapper">
            <Heading> Link </Heading>

            <Flex justifyContent={"start"} alignItems={"center"} mt={8} mb={4}>
              <Button
                colorScheme="teal"
                onClick={drawer.onOpen}
                size="sm"
                mr={2}
              >
                + Add link
              </Button>
              {/* 
              <Button
                size="sm"
                colorScheme={"blue"}
                rightIcon={<BsEye />}
                // onClick={preview.onOpen}
              >
                Preview
              </Button> */}
            </Flex>

            <TableContainer border={"1px solid #eee"}>
              <Table size="sm" variant="simple">
                <Thead>
                  <Tr>
                    <Th>Survey Name</Th>
                    <Th>Survey Description</Th>
                    <Th>Survey Links</Th>
                    <Th>Access</Th>
                    <Th>Date posted</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.length == 0
                    ? "No data available"
                    : data.map((el) => {
                        return (
                          <Tr>
                            <Td>{el.link_name}</Td>
                            <Td>{el.link_description}</Td>
                            <Td
                              style={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                              }}
                            >
                              <BsFiletypeDocx />
                              <Link href={el.link}>{el.link}</Link>
                            </Td>
                            <Td>
                              {" "}
                              {el.access === 1 ? (
                                <Badge variant="subtle" colorScheme="blue">
                                  Faculty
                                </Badge>
                              ) : el.access === 2 ? (
                                <Badge variant="subtle" colorScheme="orange">
                                  Students
                                </Badge>
                              ) : (
                                <Badge variant="subtle" colorScheme="green">
                                  Everyone
                                </Badge>
                              )}
                            </Td>
                            <Td>{moment(el.created_at).format("LLL")}</Td>
                            <Td>
                              <Button
                                onClick={() => {
                                  destroy(el.id);
                                }}
                                colorScheme="red"
                                size="sm"
                                rightIcon={<BiTrashAlt />}
                              >
                                Delete
                              </Button>
                            </Td>
                          </Tr>
                        );
                      })}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <Drawer
        size={"lg"}
        isOpen={drawer.isOpen}
        placement="right"
        onClose={drawer.onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add Survey</DrawerHeader>
          <DrawerBody>
            <Box p={5}>
              <AddSurvey id={id} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* EDIT MODAL */}
      <Modal
        blockScrollOnMount={false}
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        size="2xl"
      >
        <ModalOverlay />
        <MemoModal id={id} />
      </Modal>
    </div>
  );
}

export default SurveyLink;
