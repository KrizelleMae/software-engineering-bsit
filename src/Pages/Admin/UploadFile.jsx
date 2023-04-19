import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Kbd,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import api from "../../Api/api";
import { toast } from "react-toastify";
import Downloadables from "../../Components/Downloadables";
import { BsFile, BsFileEarmarkPdf, BsFiletypeDoc } from "react-icons/bs";
import { Document, Page } from "react-pdf";
import { useNavigate } from "react-router-dom";

function UploadFile(props) {
  const [file, setFile] = useState(null);
  const [list, setList] = useState([]);
  const [preview, setPreview] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      let response = await api.post("/upload", formData);

      if (response.data.status === 1) {
        setPreview(response.data.path);
        console.log(response.data.path);
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast
          .error(response.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
          .then(() => {
            window.location.reload(false);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // FETCH FILES
  const getFiles = async () => {
    let response = await api("/files");

    if (response) {
      setList(response.data);
    }
  };

  useEffect(() => {
    getFiles();
  }, [list]);
  const navigate = useNavigate();
  return (
    <Container maxW={"container.xl"} mt={10}>
      <Button
        leftIcon={<BiArrowBack />}
        onClick={() => {
          navigate("/admin/downloadables");
        }}
      >
        Back
      </Button>
      <Heading mt={10}>Upload File</Heading>

      <Flex justifyContent={"space-between"}>
        <Box mt={10} w={"70%"}>
          <Alert status="info" borderRadius={3}>
            <AlertIcon />
            <AlertTitle>To upload:</AlertTitle>
            <AlertDescription>
              Click the <Kbd>Choose file</Kbd> button then select the file you
              want to upload.
            </AlertDescription>
          </Alert>
          <form onSubmit={handleFormSubmit}>
            <Box border={1} borderStyle="dashed" p={6} borderRadius={10} my={3}>
              <input type="file" onChange={handleFileChange} />
            </Box>

            {!file ? "" : <Button type="submit">Upload</Button>}

            {preview && (
              <>
                <Text>File uploaded:</Text>
                {preview && (
                  <div>
                    {preview.endsWith(".jpg") ||
                    preview.endsWith(".jpeg") ||
                    preview.endsWith(".png") ? (
                      <img
                        src={preview}
                        alt="Uploaded file"
                        width="500"
                        height="500"
                      />
                    ) : preview.endsWith(".mp3") || preview.endsWith(".wav") ? (
                      <audio src={preview} controls />
                    ) : preview.endsWith(".mp4") ||
                      preview.endsWith(".avi") ||
                      preview.endsWith(".mov") ? (
                      <video src={preview} controls width="500" height="500" />
                    ) : (
                      <a href={preview} download>
                        Download file
                      </a>
                    )}
                  </div>
                )}
              </>
            )}
          </form>
        </Box>
        <Box width={600} align={"left"} ml={10}>
          <Text fontWeight={"600"}>Uploaded Files</Text>
          <List>
            {list.map((e) => {
              return (
                <ListItem my={5}>
                  {/* / <Text fontWeight={600}>File name here</Text> */}

                  <Icon
                    as={
                      e.file_type == "pdf"
                        ? BsFileEarmarkPdf
                        : e.file_type == "docx"
                        ? BsFiletypeDoc
                        : BsFile
                    }
                    color={
                      e.file_type == "pdf"
                        ? "red"
                        : e.file_type == "docx"
                        ? "blue.500"
                        : "black"
                    }
                    fontSize={20}
                    mr={3}
                  />
                  <Link
                    pl={4}
                    fontSize={13}
                    // onClick={() => {
                    //   download(e.file_name);
                    // }}
                  >
                    {e.name}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Flex>
    </Container>
  );
}

export default UploadFile;
