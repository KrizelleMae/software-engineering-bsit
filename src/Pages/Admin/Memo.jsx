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
} from "@chakra-ui/react";
import { BsEye, BsFilePdf, BsFiletypeDocx } from "react-icons/bs";
import AddMemo from "../../Contents/AddMemo";
import api from "../../Api/api";
import moment from "moment";

function Memo(props) {
  const drawer = useDisclosure();

  const [data, setData] = useState([]);

  const getList = async () => {
    let response = await api.get(`/memo`);

    setData(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

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
                    <Th>Date posted</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((el) => {
                    return (
                      <Tr>
                        <Td>{el.title}</Td>

                        <Td style={{ width: "auto" }}>
                          <Text style={{ textOverflow: "ellipsis" }}>
                            ---- See more ---
                          </Text>
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

                        <Td>{moment(el.created_at).format("LLL")}</Td>

                        {/* <Td>
                          <Button
                            onClick={() => {
                              // getFaculty(el.id);
                              setId(el.id);
                              modal.onOpen();
                            }}
                            size="sm"
                            rightIcon={<BiEditAlt />}
                          >
                            Edit
                          </Button>
                        </Td> */}
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
              <AddMemo />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Memo;
