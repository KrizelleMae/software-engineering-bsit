import {
  Box,
  Heading,
  Text,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";
import api from "../../Api/api";

function Vision(props) {
  const [vTitle, setVTitle] = useState("");
  const [vDesc, setVDesc] = useState("");
  const [date, setDate] = useState("");

  const getVision = async () => {
    try {
      let vision = await api.get("/admin/get_vision.php");

      if (vision) {
        setVTitle(vision.data[0].TITLE);
        setVDesc(vision.data[0].DESCRIPTION);
        setDate(vision.data[0].DATE);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const update = async (event) => {
    event.preventDefault();
    try {
      let response = await api.post("/admin/update_vision.php", {
        description: vDesc,
      });

      if (response.data.status === 1) {
        console.log("success");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVision();
  }, []);

  return (
    <Box mt={2}>
      <Heading fontSize="2xl">Vision </Heading>

      <form onSubmit={update}>
        <Box mt={10} w={"auto"}>
          <FormControl isRequired>
            <FormLabel fontWeight={600} fontSize={15}>
              Title
            </FormLabel>
            <Input defaultValue={vTitle} bg="white" isReadOnly />
            <FormHelperText color="teal" textTransform="italic" fontSize={13}>
              You cannot edit this section.
            </FormHelperText>
          </FormControl>
        </Box>

        <Box mt={10}>
          <FormControl isRequired>
            <FormLabel fontWeight={600} fontSize={15}>
              Description
            </FormLabel>
            <Textarea
              autoFocus
              defaultValue={vDesc}
              bg="white"
              onChange={(e) => setVDesc(e.target.value)}
            />
            <FormHelperText
              align="right"
              color="teal"
              textTransform="italic"
              fontSize={13}
            >
              Last edit: {moment(date).format("LLL")}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box mt={5} align="right">
          <Button
            colorScheme="blue"
            fontWeight={400}
            rightIcon={<BiSave />}
            type="submit"
          >
            Save edit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Vision;
