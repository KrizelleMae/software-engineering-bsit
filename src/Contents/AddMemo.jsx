import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomFileButton from "../Components/Button/CustomFileButton";
import { MdImage } from "react-icons/md";
import { BiMinusCircle, BiUpload } from "react-icons/bi";
import api from "../Api/api";
import { toast } from "react-toastify";

function AddMemo(props) {
  //DATA
  const [access, setAccess] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const files = [...event.dataTransfer.files];
    const fileData = files[0];
    setFiles((current) => [...current, fileData]);
  };

  const handleFileSelected = (file) => {
    setFiles((current) => [...current, file]);
  };

  const handleRemoveFile = (e, key) => {
    let temp = [...files];
    temp.splice(key, 1);
    setFiles(temp);
  };

  // UPLOAD TO SERVER
  const PostData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access", access);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", files[0]);

    let response = await api.post("/memo", formData);
    if (response.status === 200) {
      toast
        .success("Successfully recorded", {
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

    // console.log(response);
  };

  return (
    <form
      onSubmit={(e) => {
        PostData(e);
      }}
    >
      <FormControl isRequired>
        <FormLabel fontWeight={600} fontSize={15}>
          Audience
        </FormLabel>
        <Select
          placeholder="Select option"
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
          rows={3}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </FormControl>
      <FormLabel fontWeight={600} fontSize={15} mt={5}>
        Upload file/s
      </FormLabel>
      <VStack gap={10}>
        <Box
          backgroundColor={isDragging ? "gray.300" : "gray.50"}
          p={10}
          alignItems="center"
          justifyContent={"center"}
          textAlign={"center"}
          borderRadius={2}
          eigh
          width={"100%"}
          ht={"auto"}
          gap={4}
          sx={{
            border: 1,
            borderColor: "gray.400",
            borderStyle: "dashed",
          }}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          elevation={isDragging ? 10 : 2}
        >
          <Text fontWeight={600} fontSize={13} mb={3}>
            Drag and drop files here
          </Text>

          <CustomFileButton
            buttonText="Choose file"
            onFileSelected={handleFileSelected}
          />
        </Box>

        {/* <List spacing={3} width={"100%"}>
          {files.map((el, k) => {
            return (
              <>
                <ListItem>
                  <ListIcon as={MdImage} color="blue.500" />
                  {el.name}

                  <IconButton
                    style={{ fontSize: 12, color: "red" }}
                    onClick={() => {
                      handleRemoveFile(el, k);
                    }}
                  >
                    <BiMinusCircle />
                  </IconButton>
                </ListItem>
              </>
            );
          })}
        </List> */}
      </VStack>
      {files.length > 0 ? (
        <Box width="100%" mt={7} align="right">
          <Button colorScheme="green" type="submit" rightIcon={<BiUpload />}>
            Submit
          </Button>
        </Box>
      ) : (
        "Select file to submit."
      )}
    </form>
  );
}

export default AddMemo;
