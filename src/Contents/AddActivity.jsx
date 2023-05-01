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

function AddActivity(props) {
  //DATA
  const [activityName, setActivityName] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateEnded, setDateEnded] = useState("");
  const [location, setLocation] = useState("");
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

      // console.log(JSON.stringify(uploads));
    });

    let response = await api.post("/activity", {
      activity_name: activityName,
      date_started: dateStarted,
      date_ended: dateEnded,
      location: location,
      link: link,
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
      <FormControl isRequired>
        <FormLabel fontWeight={600} fontSize={15}>
          Activity name
        </FormLabel>
        <Input
          type="text"
          onChange={(e) => {
            setActivityName(e.target.value);
          }}
        />
      </FormControl>
      <HStack mt={3}>
        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Date started
          </FormLabel>
          <Input
            type="date"
            onChange={(e) => {
              setDateStarted(e.target.value);
            }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Date ended
          </FormLabel>
          <Input
            type="date"
            onChange={(e) => {
              setDateEnded(e.target.value);
            }}
          />
        </FormControl>
      </HStack>
      <HStack mt={3}>
        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Location
          </FormLabel>
          <Input
            type="text"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={600} fontSize={15}>
            Social media link
          </FormLabel>
          <Input
            type="link"
            onChange={(e) => {
              setLink(e.target.value);
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

export default AddActivity;
