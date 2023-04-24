import {
  Box,
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
} from "@chakra-ui/react";
import React, { useState } from "react";

function StudentActivities(props) {
  const [data, setData] = useState([]);
  return (
    <>
      <Box mt={2}>
        <Heading fontSize="2xl">Student Activities </Heading>

        <TableContainer border={"1px solid #eee"}>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Photo</Th>
                <Th>Name</Th>
                {/* <Th>Rank</Th> */}
                <Th>Designation</Th>
                <Th>Qualifications</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => {
                return (
                  <Tr>
                    <Td>
                      <Image borderRadius="full" boxSize="54" src={el.image} />
                    </Td>
                    <Td>{el.fname + " " + el.lname}</Td>

                    <Td>{el.designation}</Td>
                    <Td>
                      <i>-- See more --</i>
                    </Td>
                    {/* <Td>
                      <IconButton
                        onClick={() => {
                          // getFaculty(el.id);
                          setId(el.id);
                          modal.onOpen();
                        }}
                        size="sm"
                        colorScheme={"blue"}
                        mr={2}
                        icon={<BiEditAlt />}
                      />

                      <IconButton
                        onClick={() => {
                          del(el.id);
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
    </>
  );
}

export default StudentActivities;
