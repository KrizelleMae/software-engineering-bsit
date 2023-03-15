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
} from "@chakra-ui/react";
import image from "../../Assets/bsit.jpg";
import image2 from "../../Assets/ccs.jpg";
import { BiCalendar, BiLocationPlus, BiMapPin } from "react-icons/bi";
import moment from "moment";

function Gallery(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Activity Title Here</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default Gallery;
