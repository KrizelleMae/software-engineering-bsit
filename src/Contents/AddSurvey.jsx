import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import api from "../Api/api";
import { toast } from "react-toastify";

function AddSurvey(props) {
  //DATA
  const [access, setAccess] = useState(null);
  const [linkName, setLinkName] = useState("");
  const [linkDesc, setLinkDesc] = useState("");
  const [link, setLink] = useState("");

  const PostData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access", access);
    formData.append("link_name", linkName);
    formData.append("link_description", linkDesc);
    formData.append("link", link);

    let response = await api.post("/link", formData);
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
          Survey Name
        </FormLabel>
        <Input
          type="text"
          onChange={(e) => {
            setLinkName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl isRequired mt={3}>
        <FormControl isRequired>
          <FormLabel fontWeight={600} fontSize={15}>
            Access
          </FormLabel>
          <Select
            placeholder="Select option"
            onChange={(e) => {
              setAccess(e.target.value);
            }}
          >
            <option value="1">Faculty only</option>
            <option value="2">Students only</option>
            <option value="3">Alumni only</option>
            <option value="4">All</option>
          </Select>
        </FormControl>
        <FormLabel fontWeight={600} fontSize={15} mt="3">
          Link
        </FormLabel>
        <InputGroup size="md">
          <InputLeftAddon children="https://" />
          <Input
            placeholder="mysite"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired mt={3}>
        <FormLabel fontWeight={600} fontSize={15}>
          Description
        </FormLabel>
        <Textarea
          rows={3}
          onChange={(e) => {
            setLinkDesc(e.target.value);
          }}
        />
      </FormControl>

      <Button colorScheme="teal" type="submit" w="30%" mt={10} align="right">
        Save
      </Button>
    </form>
  );
}

export default AddSurvey;
