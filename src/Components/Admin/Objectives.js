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
  List,
  UnorderedList,
  ListItem,
  IconButton,
  OrderedList,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BiPlus, BiSave, BiTrash } from "react-icons/bi";
import api from "../../Api/api";

function Mission(props) {
  const [objectives, setObjectives] = useState([]);
  const [date, setDate] = useState("");
  const [len, setLen] = useState(objectives.length);

  const add_objective = () => {};

  //   const getMission = async () => {
  //     try {
  //       let mission = await api.get("/admin/get_mission.php");

  //       if (mission) {
  //         setMTitle(mission.data[0].TITLE);
  //         setMDesc(mission.data[0].DESCRIPTION);
  //         setDate(mission.data[0].DATE);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // EDIT
  //   const update = async (event) => {
  //     event.preventDefault();
  //     try {
  //       let response = await api.post("/admin/update_mission.php", {
  //         description: mDesc,
  //       });

  //       if (response.data.status === 1) {
  //         console.log("success");
  //       } else {
  //         console.log("failed");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const update = (e) => {
    e.preventDefault();
    console.log(objectives);
  };
  // OTHER SKILLS
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...objectives];
    list[index][name] = value;
    setObjectives(list);
  };

  //   handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...objectives];
    list.splice(index, 1);
    setObjectives(list);
  };

  // handle click event of the Add button
  const handleAddClick = (k) => {
    setObjectives([...objectives, { desc: "" }]);
    console.log(objectives[objectives.length]);
  };

  useEffect(() => {
    // getMission();
  }, [len]);

  return (
    <Box mt={2}>
      <Heading fontSize="2xl">Objectives </Heading>

      <form>
        <Box mt={10}>
          {objectives.map((e, key) => {
            return (
              <UnorderedList alignItems="center">
                <ListItem>
                  <FormControl
                    isRequired
                    mt={2}
                    display="flex"
                    alignItems="center"
                  >
                    {/* <FormLabel fontWeight={600} fontSize={15}>
                      Objective {key + 1}
                    </FormLabel> */}
                    <Textarea
                      autoFocus
                      bg="white"
                      rows={1}
                      onChange={() => {
                        e.target.value === ""
                          ? console.log("empty")
                          : handleInputChange(e, key);
                      }}
                    />
                    <IconButton
                      icon={<BiTrash />}
                      size="xs"
                      ml={2}
                      colorScheme="red"
                      onClick={() => {
                        handleRemoveClick(key);
                      }}
                    />
                  </FormControl>
                </ListItem>
              </UnorderedList>
            );
          })}
        </Box>
        <Button
          mt={5}
          rightIcon={<BiPlus />}
          size="sm"
          onClick={() => {
            handleAddClick();
          }}
        >
          Add objective
        </Button>

        <Box mt={5} align="right">
          <Button
            colorScheme="blue"
            fontWeight={400}
            rightIcon={<BiSave />}
            type="submit"
            onClick={update}
          >
            Save edit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Mission;
