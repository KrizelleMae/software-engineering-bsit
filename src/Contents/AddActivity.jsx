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

function AddActivity(props) {
  //DATA
  const [activityName, setActivityName] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateEnded, setDateEnded] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");
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
    // PostRequest({ url: "api/uploadCaf" }).then((res) => {
    //   // Response here
    //   console.log({ caf: caf, files: files });
    // });
    // console.log({ files: files });
  };

  return (
    <form
      onSubmit={() => {
        PostData();
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

        <FormControl isRequired>
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
