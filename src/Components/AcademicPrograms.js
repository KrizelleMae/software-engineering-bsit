import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Image,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import api from "../Api/api";
import LinesEllipsis from "react-lines-ellipsis";
import ProgramsDrawer from "./Popups/ProgramsDrawer";

function AcademicPrograms(props) {
  const [list, setList] = useState([]);
  // const [first, setFirst] = useState([]);
  const [id, setId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const getData = async () => {
    let response = await api.get("/programs");

    if (response) {
      setList(response.data);
      // console.log(response.data);
      // setFirst(response.data[0]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 2000);

    // cleanup function to clear the interval when the component unmounts or the interval changes
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ sm: 6, lg: 8 }}
        w={{ sm: 350, lg: 740 }}
        mt={7}
      >
        {list.map((el) => {
          return (
            <Box borderWidth="1px" overflow="hidden" p={5} borderRadius="base">
              <Box h={255}>
                <Image src={el.image} h="100%" w="100%" borderRadius={"md"} />
              </Box>

              <Box py={3} textAlign="left">
                <Text
                  fontWeight={600}
                  // letterSpacing="wide"
                  fontSize="md"
                  color={"red.700"}
                  textAlign={"center"}
                  mt={4}
                  textTransform="uppercase"
                >
                  {el.title}
                </Text>

                <Text fontSize="13.5px" mt={6}>
                  <LinesEllipsis
                    text={el.description}
                    maxLine="3"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </Text>

                <Box align="right">
                  <Button
                    size="sm"
                    rightIcon={<BiChevronRight />}
                    mt={5}
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      setId(el.id);
                      onOpen();
                    }}
                  >
                    See more
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <ProgramsDrawer id={id} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default AcademicPrograms;
