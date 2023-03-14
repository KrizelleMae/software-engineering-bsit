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
  SimpleGrid,
  Link,
  Center,
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
      <Center>
        <SimpleGrid
          columns={{ sm: 1, base: 2, md: 3, lg: 2 }}
          spacing={{ sm: 6, lg: 20 }}
          mt={7}
          align="center"
          mb={5}
        >
          {[...Array(2)].map((el) => {
            return (
              <Box
                w={{ sm: 200, lg: "100%" }}
                as={Link}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  borderRadius="xl"
                  boxSize="200"
                  w="100%"
                  h="auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&s"
                />
                <Heading
                  pt={3}
                  fontSize={"xl"}
                  fontWeight={500}
                  fontFamily={"body"}
                >
                  Prof. Roderick P. Go
                </Heading>
                <Text color={"gray.500"} fontSize={14} fontStyle="italic">
                  Director of the Institute of Computer Studies
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Center>

      <Center>
        <SimpleGrid
          columns={{ sm: 1, base: 2, md: 3, lg: 4 }}
          spacing={{ sm: 6, lg: 10 }}
          mt={7}
          align="center"
        >
          {[...Array(4)].map((el) => {
            return (
              <Box
                w={{ sm: 200, lg: "100%" }}
                as={Link}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  borderRadius="xl"
                  boxSize="200"
                  w="100%"
                  h="auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&s"
                />
                <Heading
                  pt={3}
                  fontSize={"xl"}
                  fontWeight={500}
                  fontFamily={"body"}
                >
                  Prof. Roderick P. Go
                </Heading>
                <Text color={"gray.500"} fontSize={14} fontStyle="italic">
                  Director of the Institute of Computer Studies
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Center>
      <Modal
        scrollBehavior={"inside"}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&s"
            />
            <Heading
              isCentered
              pt={30}
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
            >
              Prof. Roderick P. Go
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&s"
                />
                <Text>Awards</Text>
              </Stack>
              <Stack>
                <Image
                  borderRadius="xl"
                  boxSize="200"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTAFVzkuhv0KyF07XvNWinE1tvGQSizG6QKyM6pcCg&s"
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
