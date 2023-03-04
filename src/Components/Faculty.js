import React from "react";
import {
  Image,
  Text,
  HStack,
  Box,
  useColorModeValue,
  Button,
  Heading,
  VStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Stack,
  Badge,
  Divider,
} from "@chakra-ui/react";

function Faculty(props) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="10px" />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <div>
      <HStack mt="50px" spacing="24px">
        <Box w="400px" h="400px">
          <Image
            borderRadius="xl"
            mx="100"
            mt="10"
            boxSize="200"
            src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/310996071_3338055726479422_7676943693330611078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yDxAllAKV3MAX8h3Gl0&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfAbjyi7hjDtm-CMtSQyuRB3uhzkTmZ0tPQnimqwrWlfbw&oe=64079F1C"
          />
          <Heading
            pt={30}
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
          >
            Dr. James Tu
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
          {/* <Button
            w={200}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            View more
          </Button> */}
          <Button
            mt={30}
            w={200}
            ml="4"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "lg",
            }}
            bg={useColorModeValue("#151f21", "red.500")}
            color={"White"}
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            View more
          </Button>
        </Box>
        <Box w="400px" h="400px">
          <Image
            borderRadius="xl"
            mx="100"
            mt="10"
            boxSize="200"
            src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/310996071_3338055726479422_7676943693330611078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yDxAllAKV3MAX8h3Gl0&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfAbjyi7hjDtm-CMtSQyuRB3uhzkTmZ0tPQnimqwrWlfbw&oe=64079F1C"
          />
          <Heading
            pt={30}
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
          >
            James Tu
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
          <Button
            mt={30}
            w={200}
            ml="4"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "lg",
            }}
            bg={useColorModeValue("#151f21", "red.500")}
            color={"White"}
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            View more
          </Button>
        </Box>
        <Box w="400px" h="400px">
          <Image
            borderRadius="xl"
            mx="100"
            mt="10"
            boxSize="200"
            src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/310996071_3338055726479422_7676943693330611078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yDxAllAKV3MAX8h3Gl0&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfAbjyi7hjDtm-CMtSQyuRB3uhzkTmZ0tPQnimqwrWlfbw&oe=64079F1C"
          />
          <Heading
            pt={30}
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
          >
            James Tu
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
          <Button
            mt={30}
            w={200}
            ml="4"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "lg",
            }}
            bg={useColorModeValue("#151f21", "red.500")}
            color={"White"}
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            View more
          </Button>
        </Box>
      </HStack>

      <Modal
        scrollBehavior={"inside"}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={"lg"}
      >
        {overlay}
        <ModalContent>
          <ModalHeader>Faculty Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              isCentered
              borderRadius="xl"
              boxSize="200"
              src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/310996071_3338055726479422_7676943693330611078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yDxAllAKV3MAX8h3Gl0&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfAbjyi7hjDtm-CMtSQyuRB3uhzkTmZ0tPQnimqwrWlfbw&oe=64079F1C"
            />
            <Heading
              isCentered
              pt={30}
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
            >
              Dr. James Tu PHP JVS
            </Heading>
            <Text color={"gray.500"}>Frontend Developer</Text>
            Cyber Security Resume Sample. Teacher Resume Samples & Guide. CV
            Samples for Students. Create a Free Resume, Export to MS Word, Build
            a Cover Letter & More. Start Now! Shop Online. Read News. Get Tips.
            <Divider />
            <Heading
              isCentered
              pt={30}
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
            >
              Contact Info
            </Heading>
            <HStack mt={5}>
              <Stack>
                <Image
                  borderRadius="xl"
                  boxSize="200"
                  src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/310996071_3338055726479422_7676943693330611078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yDxAllAKV3MAX8h3Gl0&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfAbjyi7hjDtm-CMtSQyuRB3uhzkTmZ0tPQnimqwrWlfbw&oe=64079F1C"
                />
                <Text>Awards</Text>
              </Stack>
              <Stack>
                <Image
                  borderRadius="xl"
                  boxSize="200"
                  src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/310996071_3338055726479422_7676943693330611078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yDxAllAKV3MAX8h3Gl0&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfAbjyi7hjDtm-CMtSQyuRB3uhzkTmZ0tPQnimqwrWlfbw&oe=64079F1C"
                />
                <Text>Awards</Text>
              </Stack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Faculty;
