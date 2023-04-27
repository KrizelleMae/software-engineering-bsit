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
  Link,
} from "@chakra-ui/react";
import api from "../../Api/api";
import { BiFile, BiSave } from "react-icons/bi";
import { toast } from "react-toastify";

function MemoModal(props) {
  //DATA
  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");
  const [file_name, setFile_name] = useState("");
  const [description, setDescription] = useState("");
  const [access, setAccess] = useState(null);

  const getMemo = async () => {
    let response = await api.get(`/memo/${props.id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setPath(response.data.path);
    setAccess(response.data.access);
    setFile_name(response.data.file_name);
  };

  //   UPDATE
  const update = async (e) => {
    e.preventDefault();

    let response = await api.post(`/memo/${props.id}`, {
      access: access,
      title: title,
      description: description,
      // public_id: upload.data.public_id,
    });

    if (response.status === 200) {
      toast.success("Successfully recorded", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
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

    console.log(response.data);
  };

  useEffect(() => {
    getMemo();
  }, [props.id]);
  return (
    <div>
      <ModalContent>
        <ModalHeader>Update Record</ModalHeader>
        <ModalCloseButton />
        <form
          onSubmit={(e) => {
            update(e);
          }}
        >
          <DrawerBody>
            {/* {details.map((el) => {
            return (
              <> */}

            <Stack spacing="24px">
              <FormControl isRequired>
                <FormLabel fontWeight={600} fontSize={15}>
                  Audience
                </FormLabel>
                <Select
                  placeholder="Select option"
                  value={access}
                  onChange={(e) => {
                    setAccess(e.target.value);
                  }}
                >
                  <option value="1">Faculties only</option>
                  <option value="2">Students only</option>
                  <option value="3">All</option>
                </Select>
              </FormControl>
              <FormControl isRequired mt={3}>
                <FormLabel fontWeight={600} fontSize={15}>
                  Memo title
                </FormLabel>
                <Input
                  value={title}
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl isRequired mt={3}>
                <FormLabel fontWeight={600} fontSize={15}>
                  Description
                </FormLabel>
                <Textarea
                  value={description}
                  rows={3}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </FormControl>
              <FormLabel fontWeight={600} fontSize={15} mt={5}>
                Attachment
              </FormLabel>
              <Box
                style={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <BiFile />
                <Link href={path} target="_blank">
                  {file_name}
                </Link>
              </Box>
            </Stack>
          </DrawerBody>

          <ModalFooter>
            <Box width="100%" mt={7} align="right">
              <Button
                colorScheme="green"
                type="submit"
                variant="solid"
                fontWeight={500}
                rightIcon={<BiSave />}
              >
                Submit
              </Button>
            </Box>
          </ModalFooter>
        </form>
      </ModalContent>
    </div>
  );
}

export default MemoModal;
