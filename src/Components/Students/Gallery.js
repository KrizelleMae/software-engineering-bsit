import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Box,
  Center,
  Flex,
  Image,
  Link,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
} from "@chakra-ui/react";
import image from "../../Assets/bsit.jpg";
import image2 from "../../Assets/ccs.jpg";
import {
  BiCalendar,
  BiDetail,
  BiLink,
  BiLinkExternal,
  BiLocationPlus,
  BiMapPin,
} from "react-icons/bi";
import moment from "moment";

function Gallery(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center>
        <Swiper
          // style={{ height: "400px" }}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          // centeredSlides={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Box as={Link} className="image-container" onClick={onOpen}>
              <Image src={image} className="image" />
              <Box className="overlay-act" pl={10}>
                <Text fontWeight={600} fontSize={20} textTransform="uppercase">
                  CCS Fest '23
                </Text>
                <Flex align Items="center" mt={4}>
                  <BiCalendar />
                  <Text fontSize={14} ml={2}>
                    {moment().format("MMMM DD")} - 15 {moment().format("YYYY")}
                  </Text>
                </Flex>
                <Flex align Items="center">
                  <BiMapPin />
                  <Text fontSize={14} ml={2}>
                    Western Mindanao State University
                  </Text>
                </Flex>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box as={Link} className="image-container" onClick={onOpen}>
              <Image src={image2} className="image" />
              <Box className="overlay-act" pl={10}>
                <Text fontWeight={600} fontSize={20} textTransform="uppercase">
                  CCS Fest '23
                </Text>
                <Flex align Items="center" mt={4}>
                  <BiCalendar />
                  <Text fontSize={14} ml={2}>
                    {moment().format("MMMM DD")} - 15 {moment().format("YYYY")}
                  </Text>
                </Flex>
                <Flex align Items="center">
                  <BiMapPin />
                  <Text fontSize={14} ml={2}>
                    Western Mindanao State University
                  </Text>
                </Flex>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box as={Link} className="image-container" onClick={onOpen}>
              <Image src={image} className="image" />
              <Box className="overlay-act" pl={10}>
                <Text fontWeight={600} fontSize={20} textTransform="uppercase">
                  CCS Fest '23
                </Text>
                <Flex align Items="center" mt={4}>
                  <BiCalendar />
                  <Text fontSize={14} ml={2}>
                    {moment().format("MMMM DD")} - 15 {moment().format("YYYY")}
                  </Text>
                </Flex>
                <Flex align Items="center">
                  <BiMapPin />
                  <Text fontSize={14} ml={2}>
                    Western Mindanao State University
                  </Text>
                </Flex>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>

        {/* MODAL */}
      </Center>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignContent={"center"}>
              <Box pt={5}>
                <Box width={630}>
                  <Swiper
                    // style={{ height: "400px" }}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // centeredSlides={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    {[...Array(4)].map((el) => {
                      return (
                        <SwiperSlide>
                          <Image src={image} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Box>
              </Box>

              <Box p={20}>
                <Heading mb={14}>Activity name</Heading>
                <Box>
                  <Flex alignItems="center" mt={4}>
                    <BiCalendar />
                    <Text fontSize={15} ml={2}>
                      {moment().format("MMMM DD")} - 30,{" "}
                      {moment().format("YYYY")}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" mt={2}>
                    <BiMapPin />
                    <Text fontSize={17} ml={2}>
                      Western Mindanao State University
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={2}>
                    <BiLink />
                    <Link
                      fontSize={17}
                      ml={2}
                      href="#"
                      textDecoration={"underline"}
                    >
                      facebook.com/asdasdsd/event-sample-name
                    </Link>
                  </Flex>

                  <Flex alignItems="center" s mt={20}>
                    <BiDetail />
                    <Text fontSize={15} lineHeight={2} textAlign="justify">
                      It basically rests on the enhancement of the output
                      potentials of units to provide a sustainable source of
                      income to finance its many educational and social
                      concerns. This is to aid in unburdening government of the
                      bloating costs of subsidy in the operations of state-run
                      colleges and universities. It basically rests on the
                      enhancement of the output potentials of units to provide a
                      sustainable source of income to finance its many
                      educational and social concerns. This is to aid in
                      unburdening government of the bloating costs of subsidy in
                      the operations of state-run colleges and universities.
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Gallery;
