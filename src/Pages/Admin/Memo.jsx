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
  Badge,
} from "@chakra-ui/react";
import { BsEye, BsFilePdf, BsFiletypeDocx } from "react-icons/bs";
import AddMemo from "../../Contents/AddMemo";
import api from "../../Api/api";
import moment from "moment";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import MemoModal from "../../Components/Popups/MemoModal";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Memo(props) {
  const drawer = useDisclosure();
  const modal = useDisclosure();

  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const getList = async () => {
    let response = await api.get(`/memo`);

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
        let response = await api.delete(`/memo/${id}`);
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
            <Heading>Memorandum</Heading>

            <Flex justifyContent={"start"} alignItems={"center"} mt={8} mb={4}>
              <Button
                colorScheme="teal"
                onClick={drawer.onOpen}
                size="sm"
                mr={2}
              >
                + Add memo
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
              <Table size="md" variant="simple">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>Description</Th>
                    <Th>File</Th>
                    <Th>Access</Th>
                    <Th>Date posted</Th>

                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((el) => {
                    return (
                      <Tr>
                        <Td>{el.title}</Td>
                        <Td style={{ width: "100%" }}>
                          <small>
                            <Text
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              ---- Click &nbsp; <BiEditAlt />
                              &nbsp; to view ---
                            </Text>
                          </small>
                        </Td>
                        <Td
                          style={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                          }}
                        >
                          <BsFiletypeDocx />
                          <Link href={el.files}>{el.file_name}</Link>
                        </Td>
                        <Td style={{ fontWeight: 600 }}>
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
                              All
                            </Badge>
                          )}
                        </Td>
                        <Td>{moment(el.created_at).format("LLL")}</Td>

                        <Td>
                          <Button
                            onClick={() => {
                              // getFaculty(el.id);
                              modal.onOpen();
                              setId(el.id);
                            }}
                            colorScheme="blue"
                            mr={2}
                            size="sm"
                            rightIcon={<BiEditAlt />}
                          >
                            Edit
                          </Button>

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
          <DrawerHeader borderBottomWidth="1px">Add Memo</DrawerHeader>

          <DrawerBody>
            <Box p={5}>
              <AddMemo id={id} />
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

export default Memo;
