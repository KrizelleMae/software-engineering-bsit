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
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomFileButton from "../Components/Button/CustomFileButton";
import { MdCheckCircle, MdImage } from "react-icons/md";
import { BiMinusCircle, BiUpload } from "react-icons/bi";
import api from "../Api/api";
import cloudinary from "../Api/CloudinaryApi";
import { toast } from "react-toastify";

function AddSupport(props) {
  //DATA
  const [organization, setOrganization] = useState("");
  const [head, setHead] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [uploads, setUploads] = useState([]);
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
    const data = new FormData();

    files.forEach(async (file) => {
      data.append("file", file);
      data.append("upload_preset", "v5l0cmm0");
      data.append("cloud_name", "de0h9yawl");

      let upload = await cloudinary.post("/", data);

      // successfull upload
      if (upload.status === 200) {
        setUploads((current) => [...current, upload.data.url]);
      } else {
        console.log("ERROR OCCURRED!");
      }
    });

    let response = await api.post("/support", {
      org_name: organization,
      head: head,
      address: address,
      contactNumber: contactNumber,
      description: description,
      images: JSON.stringify(uploads),
    });

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
  };

  return (
    <form
      onSubmit={(e) => {
        PostData(e);
      }}
    >
      <HStack mt={3}>
        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Organization
          </FormLabel>
          <Input
            type="text"
            onChange={(e) => {
              setOrganization(e.target.value);
            }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Head
          </FormLabel>
          <Input
            type="text"
            onChange={(e) => {
              setHead(e.target.value);
            }}
          />
        </FormControl>
      </HStack>
      <HStack mt={3}>
        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Address
          </FormLabel>
          <Input
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Contact Number
          </FormLabel>
          <Input
            type="number"
            onChange={(e) => {
              setContactNumber(e.target.value);
            }}
          />
        </FormControl>
      </HStack>
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
        Images
      </FormLabel>
      <HStack gap={10}>
        <Box
          backgroundColor={isDragging ? "gray.300" : "gray.50"}
          p={10}
          alignItems="center"
          justifyContent={"center"}
          textAlign={"center"}
          borderRadius={2}
          width={300}
          height={"auto"}
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

        <List spacing={3}>
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
        </List>
      </HStack>{" "}
      {files.length > 0 ? (
        <Box width="100%" mt={10} align="right">
          <Button colorScheme="green" type="submit" rightIcon={<BiUpload />}>
            Submit
          </Button>
        </Box>
      ) : (
        "Select file/s to submit."
      )}
    </form>
  );
}

export default AddSupport;
