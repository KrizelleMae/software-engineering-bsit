import {
  Box,
  Heading,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
import api from "../../Api/api";
import cloudinary from "../../Api/CloudinaryApi";
import { toast } from "react-toastify";

function News(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");

  const post_to_cloudinary = async (e) => {
    e.preventDefault();

    try {
      if (file[0].size > 10000000) {
        toast.error("File size is too big. Maximum size upload is 10mb", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        const data = new FormData();
        data.append("file", file[0]);
        data.append("upload_preset", "v5l0cmm0");
        data.append("cloud_name", "de0h9yawl");

        let upload = await cloudinary.post("/", data);

        if (upload.status === 200) {
          let response = await api.post("/news", {
            title: title,
            description: desc,
            image: upload.data.url,
            public_id: upload.data.public_id,
          });

          if (response.status === 200) {
            toast.success("News successfully added", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,

              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setDesc("");
            setTitle("");
            setFile("");
          }
        } else {
          toast.error("Error occurred. Try again!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box mt={2}>
      <Heading fontSize="2xl">News </Heading>

      <form onSubmit={post_to_cloudinary}>
        <Box mt={10} w={"auto"}>
          <FormControl isRequired>
            <FormLabel fontWeight={600} fontSize={15}>
              News Title
            </FormLabel>
            <Input
              autoFocus
              bg="white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
        </Box>

        <Box mt={6}>
          <FormControl isRequired>
            <FormLabel fontWeight={600} fontSize={15}>
              Description
            </FormLabel>
            <Textarea
              bg="white"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </FormControl>
        </Box>

        <Box mt={6}>
          <FormControl isRequired>
            <FormLabel fontWeight={600} fontSize={15}>
              Image cover
            </FormLabel>
            <Input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setFile(e.target.files);
              }}
            />
          </FormControl>
        </Box>

        <Box mt={5} align="right">
          <Button
            colorScheme="blue"
            fontWeight={400}
            rightIcon={<BiUpload />}
            type="submit"
          >
            Add news
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default News;
