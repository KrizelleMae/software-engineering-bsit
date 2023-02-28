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

function Mission(props) {
  const [mTitle, setMTitle] = useState("");
  const [mDesc, setMDesc] = useState("");
  const [date, setDate] = useState("");

  const getMission = async () => {
    try {
      let mission = await api.get("/admin/get_mission.php");

      if (mission) {
        setMTitle(mission.data[0].TITLE);
        setMDesc(mission.data[0].DESCRIPTION);
        setDate(mission.data[0].DATE);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const update = async (event) => {
    event.preventDefault();
    try {
      let response = await api.post("/admin/update_mission.php", {
        description: mDesc,
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
    getMission();
  }, []);

  return (
    <Box mt={2}>
      <Heading fontSize="2xl">Mission </Heading>

      <form onSubmit={update}>
        <Box mt={10} w={"auto"}>
          <FormControl isRequired>
            <FormLabel fontWeight={600} fontSize={15}>
              Title
            </FormLabel>
            <Input defaultValue={mTitle} bg="white" isReadOnly />
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
              defaultValue={mDesc}
              bg="white"
              onChange={(e) => setMDesc(e.target.value)}
            />{" "}
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

export default Mission;
