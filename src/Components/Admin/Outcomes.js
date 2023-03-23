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
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-toastify";

function Outcomes(props) {
  const [mTitle, setMTitle] = useState("");
  const [mDesc, setMDesc] = useState("");
  //   const [newDesc, setNewDesc] = useState("");
  const [date, setDate] = useState("");

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  // const handleChange = (data) => {
  //   let newData = convertToRaw(data.getCurrentContent());

  //   setNewDesc(JSON.stringify(newData.blocks[0]["text"]));
  // };

  const get = async () => {
    try {
      let response = await api.get("/outcomes");

      if (response) {
        setMTitle(response.data[0].title);
        setMDesc(response.data[0].description);
        setDate(response.data[0].DATE);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const update = async (event) => {
    event.preventDefault();
    try {
      let response = await api.post(`/outcomes/1`, {
        description: mDesc,
      });

      if (response.status === 200) {
        toast.success("Successfully updated", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("Error occurred. Try again!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Box mt={2}>
      <Heading fontSize="2xl">Program Outcomes </Heading>

      <form onSubmit={update}>
        <Box mt={10} w={"auto"}>
          <FormControl>
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

            <Box
              border=".1px solid "
              borderColor={"gray.200"}
              borderRadius={10}
            >
              {/* <Editor
                  editorState={editorState}
                  height="100px"
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                  // defaultContentState={editorState}
                  p={10}
                  onEditorStateChange={handleChange}
                />
                <Editor onChange={setEditorState} />; */}

              <Textarea
                onChange={(e) => setMDesc(e.target.value)}
                defaultValue={mDesc}
              />
            </Box>

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

export default Outcomes;
