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
  const [id, setId] = useState("");
  const [date, setDate] = useState("");

  const add_objective = async (e) => {
    e.preventDefault();
    let response = await api.post("/objectives", {
      title: "Objectives",
      description: JSON.stringify(objectives),
    });

    console.log(response.data);
  };

  const update = async (e) => {
    e.preventDefault();
    let response = await api.post(`/objectives/${id}`, {
      title: "Objectives",
      description: JSON.stringify(objectives),
    });

    console.log(response.data);
  };

  // OTHER SKILLS
  const handleInputChange = (value, index) => {
    const list_new = [...objectives];
    list_new[index]["desc"] = value;
    setObjectives(list_new);
  };

  //   handle click event of the Remove button
  const handleRemoveClick = (index) => {
    // console.log(index);
    const list_new = [...objectives];
    list_new.splice(index, 1);
    setObjectives(list_new);
  };

  // handle click event of the Add button
  const handleAddClick = (k) => {
    setObjectives([...objectives, { desc: "" }]);
    // console.log(list[list.length]);
  };

  const getObjectives = async () => {
    let response = await api.get("/objectives");

    setObjectives(JSON.parse(response.data[0].description));
    setId(response.data[0].id);
    // console.log(response.data);
  };

  useEffect(() => {
    getObjectives();
  }, [id]);

  return (
    <Box mt={2}>
      <Heading fontSize="2xl">Objectives </Heading>

      {objectives.length === 0 ? (
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
                        onChange={(el) => {
                          handleInputChange(el.target.value, key);
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
              onClick={add_objective}
            >
              Add new
            </Button>
          </Box>
        </form>
      ) : (
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
                      <Textarea
                        autoFocus
                        bg="white"
                        rows={1}
                        defaultValue={e.desc}
                        onChange={(el) => {
                          handleInputChange(el.target.value, key);
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
              Save changes
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
}

export default Mission;
