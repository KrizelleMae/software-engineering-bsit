import { DownloadIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Icon,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFile, BsFileEarmarkPdf, BsFiletypeDocx } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api/api";
import ViewFileDrawer from "./Popups/ViewFileDrawer";
import PDFViewer from "./FileViewer";

function Downloadables(props) {
  const [list, setList] = useState([]);
  const [path, setPath] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // PREVIEW
  // const download = (file_path) => {
  //   const new_path = file_path.split("/");
  //   setPath(new_path[1]);
  //   onOpen();
  // };

  // const download = async (file) => {
  //   // const path = file.split("/");
  //   // // let response = await api.get(`/download/${path[1]}`);
  //   // fetch(`/api/download/${path[1]}`)
  //   //   .then((response) => response.blob())
  //   //   .then((blob) => {
  //   //     const url = URL.createObjectURL(blob);
  //       // window.open(url, "_blank");
  //   //   });
  // };
  let navigate = useNavigate();
  const download = (file) => {
    const path = file.split("/");
    // window.location.href = file;
    // window.open(file, "_blank");

    window.location.href = `view/${path[2]}`;
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
  }, []);
  return (
    <div>
      <Text fontWeight={500} fontSize={15} mb={5} textTransform={"uppercase"}>
        Downloadable files
      </Text>

      <Alert status="info" borderRadius={3}>
        <AlertIcon />
        <AlertTitle>To download files:</AlertTitle>
        <AlertDescription>
          Just select the file you want to download, then click the{" "}
          <DownloadIcon /> to proceed.
        </AlertDescription>
      </Alert>
      <List mt={10}>
        {list.map((e) => {
          return (
            <ListItem my={5}>
              {/* / <Text fontWeight={600}>File name here</Text> */}

              <Icon
                as={
                  e.file_type == "pdf"
                    ? BsFileEarmarkPdf
                    : e.file_type == "docx"
                    ? BsFiletypeDocx
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
                onClick={() => {
                  download(e.file_name);
                }}
              >
                {e.name}
              </Link>
            </ListItem>
          );
        })}
      </List>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <ViewFileDrawer path={path} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Downloadables;
