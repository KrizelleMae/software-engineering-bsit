import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../../Api/api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function FacultyList(props) {
  let navigate = useNavigate();
  const drawer = useDisclosure();

  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await api.get(`/showFaculty`);

    if (response) {
      setData(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div>
      <Box mt={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize="2xl">Account list </Heading>{" "}
          <Box align="right" my={2}></Box>
        </Flex>

        <TableContainer border={"1px solid #eee"} mt={8}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
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
                      <Td>{el.fname + " " + el.mi + ". " + el.lname}</Td>
                      <Td>{el.email}</Td>
                    </Tr>
                  );
                })
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default FacultyList;
