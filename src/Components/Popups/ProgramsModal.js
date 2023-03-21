import React, { useEffect, useState } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Box,
  Stack,
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
  ModalBody,
  Center,
} from "@chakra-ui/react";
import api from "../../Api/api";
import { BiPlus, BiSend, BiTrash } from "react-icons/bi";

function ProgramsModal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  //   const [list, setList] = useState([]);

  const [details, setDetails] = useState([]);

  const getData = async () => {
    let response = await api.get(`/programs/${props.id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setImage(response.data.image);
    // setList(JSON.parse(response.data.qualifications));
  };

  //   UPDATE
  const update = async (e) => {
    e.preventDefault();
    let response = await api.post(`/programs/${props.id}`, {
      title: title,
      image: image,
      description: description,
      // public_id: upload.data.public_id,
    });

    // if (response.status === 200) {
    //   console.log("Success");
    // }

    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [props.id]);
  return (
    <div>
      <ModalContent>
        <ModalHeader>Update</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Center>
            <Image src={image} h={200} w={"auto"} borderRadius={"md"} />
          </Center>

          <form onSubmit={update}>
            <Stack spacing="24px" mt={5}>
              <FormControl isRequired>
                <FormLabel
                  //   fontWeight={500}
                  color="gray.600"
                  fontSize="sm"
                  htmlFor="username"
                  fontWeight={600}
                >
                  Academic Program Title
                </FormLabel>

                <Input
                  defaultValue={title}
                  fontSize={15}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="John"
                  bg="gray.100"
                  p={5}
                  mr="2"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  fontWeight={600}
                  color="gray.600"
                  fontSize="sm"
                  htmlFor="username"
                >
                  Program description
                </FormLabel>

                <Textarea
                  bg="gray.100"
                  fontSize={15}
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  p={5}
                  mr="2"
                />
              </FormControl>
            </Stack>

            <Button
              colorScheme="blue"
              type="submit"
              mb={5}
              mt={8}
              float="right"
              w={120}
              fontWeight={500}
            >
              Update
            </Button>
          </form>
        </ModalBody>

        {/* <ModalFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            fontWeight={500}    
            onClick={update}
          >
            Update record
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </div>
  );
}

export default ProgramsModal;
