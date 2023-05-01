import React, { useEffect, useState } from "react";
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
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import image from "../Assets/bsit.jpg";
import { BiCalendar, BiMapPin } from "react-icons/bi";
import moment from "moment";
import api from "../Api/api";

function Gallery(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState([]);

  const [data, setData] = useState([]);
  const [activity, setActivity] = useState([]);

  const getList = async () => {
    let response = await api.get(`/activity`);

    if (response) {
      setData(response.data);
    }
  };

  const getData = async (e, id) => {
    e.preventDefault();

    let res = await api.get(`/activity/${id}`);

    if (res) {
      setActivity(res.data);
      setImages(JSON.parse(res.data.image1));
    }
  };

  useEffect(() => {
    getList();
  }, []);

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
          {data.length == 0
            ? "No data"
            : data.map((el) => {
                return (
                  <SwiperSlide>
                    <Box
                      as={Link}
                      className="image-container"
                      onClick={(e) => {
                        getData(e, el.id);
                        onOpen();
                      }}
                    >
                      <Image src={JSON.parse(el.image1)[0]} className="image" />
                      {/* <Image src={image} className="image" /> */}
                      <Box className="overlay-act" pl={10}>
                        <Text
                          fontWeight={600}
                          fontSize={20}
                          textTransform="uppercase"
                        >
                          {el.activity_name}
                        </Text>
                        <Flex align Items="center" mt={4}>
                          <BiCalendar />
                          <Text fontSize={14} ml={2}>
                            {el.date_started === el.date_ended ? (
                              moment(el.date_started).format("ll")
                            ) : (
                              <>
                                {moment(el.date_started).format("ll")}
                                {" - "}
                                {moment(el.date_ended).format("ll")}
                              </>
                            )}
                          </Text>
                        </Flex>
                        <Flex align Items="center">
                          <BiMapPin />
                          <Text fontSize={14} ml={2}>
                            {el.location}
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
        </Swiper>

        {/* MODAL */}
      </Center>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
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
                    {images.map((el) => {
                      return (
                        <SwiperSlide>
                          <Image src={el} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Box>
              </Box>

              {/* {activity.length === 0
                ? "No data"
                : activity.map((el) => {
                    return (
                      <>
                        <Box p={20}>
                          <Heading mb={14}>{el.activity_name}e</Heading>
                          <Box>
                            <Flex alignItems="center" mt={4}>
                              <BiCalendar />
                              <Text fontSize={15} ml={2}>
                                {el.date_started === el.date_ended ? (
                                  moment(el.date_started).format("ll")
                                ) : (
                                  <>
                                    {moment(el.date_started).format("ll")}
                                    {" - "}
                                    {moment(el.date_ended).format("ll")}
                                  </>
                                )}
                              </Text>
                            </Flex>
                            <Flex alignItems="center" mt={2}>
                              <BiMapPin />
                              <Text fontSize={17} ml={2}>
                                {el.location}
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
                                {el.link}
                              </Link>
                            </Flex>

                            <Flex alignItems="center" s mt={20}>
                              <BiDetail />
                              <Text
                                fontSize={15}
                                lineHeight={2}
                                textAlign="justify"
                              >
                                {el.description}
                              </Text>
                            </Flex>
                          </Box>
                        </Box>
                      </>
                    );
                  })} */}

              {JSON.stringify(activity)}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Gallery;
