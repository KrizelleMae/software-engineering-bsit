import React from "react";
import Downloadables from "../../Components/Downloadables";
import Sidebar from "../../Components/Admin/Sidebar";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BiAddToQueue, BiCloudUpload } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Downloads(props) {
  let navigate = useNavigate();
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="content-wrapper">
          <Flex justifyContent={"space-between"}>
            <Heading>Downloadables</Heading>
            <Box>
              <Button
                rightIcon={<BiCloudUpload />}
                onClick={() => navigate("/upload")}
              >
                Upload file
              </Button>
            </Box>
          </Flex>

          <Box mt={2}>
            <Downloadables />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
