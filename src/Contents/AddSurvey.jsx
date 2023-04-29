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
import CustomFileButton from "../Components/Button/CustomFileButton";
import { MdImage } from "react-icons/md";
import { BiMinusCircle, BiUpload } from "react-icons/bi";
import api from "../Api/api";
import { toast } from "react-toastify";

function AddSurvey(props) {
  //DATA
  const [access, setAccess] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (event) => {};
  return (
    <form
    // onSubmit={(e) => {
    //   PostData(e);
    // }}
    >
      <FormControl isRequired>
        <FormLabel fontWeight={600} fontSize={15}>
          Survey Name
        </FormLabel>
        <Input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
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
            <option value="1">Faculties only</option>
            <option value="2">Students only</option>
            <option value="3">All</option>
          </Select>
        </FormControl>
        <FormLabel fontWeight={600} fontSize={15} mt="3">
          Link
        </FormLabel>
        <InputGroup size="md">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" />
        </InputGroup>
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
    </form>
  );
}

export default AddSurvey;
