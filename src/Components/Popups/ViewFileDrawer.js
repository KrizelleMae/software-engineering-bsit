import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  Heading,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  UnorderedList,
  ListItem,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import api from "../../Api/api";
import { BsDownload } from "react-icons/bs";

function ViewFileDrawer({ path }) {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const getFile = async () => {
    let response = await api.get(`/file/${path}`);
    setFile(response.data);
  };

  const download = async () => {
    let response = await api.get(`/download/${path}`);

    console.log(response.data.path);
    window.open(response.data.path, "_blank");
  };

  useEffect(() => {
    getFile();
  }, [path]);

  return (
    <div>
      <DrawerBody mt={7}>
        <Center>
          <Image
            isCentered
            borderRadius="xl"
            boxSize="200"
            w={250}
            h={250}
            src={image}
          />
        </Center>

        <Button rightIcon={<BsDownload />} onClick={download}>
          Download file
        </Button>
      </DrawerBody>
    </div>
  );
}

export default ViewFileDrawer;
