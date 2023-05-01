import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Stack,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Box,
  Button,
  DrawerBody,
  FormLabel,
  Input,
  Textarea,
  Select,
  FormControl,
  IconButton,
  Flex,
  Image,
  HStack,
} from "@chakra-ui/react";
import api from "../Api/api";

function AlumniDetails(props) {
  const [data, setData] = useState([]);

  const getAlumni = async () => {
    let response = await api.get(`/alumni/1`);

    setData(response.data);
  };

  useEffect(() => {
    getAlumni();
  }, [data]);
  return (
    <div>
      {!data ? (
        <Alert mt={7} status="info" variant="left-accent">
          <AlertIcon />
          <AlertTitle>Edit your profile.</AlertTitle>
          <AlertDescription>
            Kindly edit your profile to view account details. Thank you!
          </AlertDescription>
        </Alert>
      ) : (
        data.map((el, key) => {
          return (
            <>
              <Stack spacing="25px" p={4}>
                <Flex mb={4}>
                  <Box w="100%">
                    <HStack>
                      <FormControl isRequired>
                        <FormLabel
                          fontWeight={500}
                          color="gray.600"
                          fontSize="sm"
                          htmlFor="username"
                        >
                          First name
                        </FormLabel>

                        <Input mr="2" value={el.fname} name="name" />
                      </FormControl>

                      <FormControl>
                        <FormLabel
                          fontWeight={500}
                          color="gray.600"
                          fontSize="sm"
                          htmlFor="username"
                        >
                          Middle name
                        </FormLabel>

                        <Input mr="2" value={el.mname} name="name" />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          fontWeight={500}
                          color="gray.600"
                          fontSize="sm"
                          htmlFor="username"
                        >
                          Last name
                        </FormLabel>

                        <Input mr="2" value={el.lname} name="name" />
                      </FormControl>
                    </HStack>

                    <HStack mt={5}>
                      <FormControl isRequired>
                        <FormLabel
                          fontWeight={500}
                          color="gray.600"
                          fontSize="sm"
                          htmlFor="username"
                        >
                          Batch
                        </FormLabel>

                        <Input mr="2" value={el.batch} name="name" />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          fontWeight={500}
                          color="gray.600"
                          fontSize="sm"
                          htmlFor="username"
                        >
                          Section (BSIT-4A)
                        </FormLabel>

                        <Input mr="2" value={el.section} name="name" />
                      </FormControl>
                    </HStack>
                  </Box>
                </Flex>

                <HStack>
                  <FormControl isRequired>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Agency Type
                    </FormLabel>

                    <Select placeholder="Select job">
                      <option value={el.agency}>{el.agency}</option>;
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Work Industry
                    </FormLabel>

                    <Select placeholder="Select industry">
                      <option value={el.industry}>{el.industry}</option>
                    </Select>
                  </FormControl>
                </HStack>

                <HStack>
                  <FormControl isRequired width={1500}>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Job Title
                    </FormLabel>

                    <Input mr="2" value={el.title} name="name" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel
                      fontWeight={500}
                      color="gray.600"
                      fontSize="sm"
                      htmlFor="username"
                    >
                      Years in Service
                    </FormLabel>

                    <Select placeholder="Years">
                      <option value={el.years_in_service}>
                        {el.years_in_service}
                      </option>
                    </Select>
                  </FormControl>
                </HStack>
              </Stack>
            </>
          );
        })
      )}
    </div>
  );
}

export default AlumniDetails;
