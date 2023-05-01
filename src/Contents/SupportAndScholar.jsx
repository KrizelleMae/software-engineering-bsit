import {
  Image,
  Stack,
  Text,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Wrap,
  GridItem,
  Grid,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import "../Styles/Login.css";
// import wave1 from "../Assets/wave1.svg";
import api from "../Api/api";

function SupportAndScholar(props) {
  const [scholar, setScholar] = useState([]);
  const [support, setSupport] = useState([]);

  const getData = async () => {
    let scholarship = await api.get(`/scholar`);

    if (scholarship) {
      setScholar(scholarship.data);
    }

    let supports = await api.get(`/support`);

    if (supports) {
      setSupport(supports.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="login-page"
      //   style={{ position: "absolute", margin: "auto" }}
    >
      {/* <Stack spacing={0} align={"left"} mt="50px">
        <Text>Back </Text>
        <Heading> Services and Scholarships</Heading>
        <Text>Student support sevices and Scholarships BSIT</Text>
      </Stack> */}
      <Grid templateColumns="repeat(2, 1fr)" gap={10} mr="50px">
        <GridItem h="200" colSpan={1}>
          <Text mt="50px" fontSize={18} mb={2}>
            Student Support
          </Text>
          <Wrap maxw="100%">
            {support.map((el) => {
              return (
                <>
                  <Card
                    maxh="100"
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src={
                        JSON.parse(el.images)[0] ??
                        "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      }
                    />
                    <Stack>
                      <CardBody>
                        <Heading size="md">{el.org_name}</Heading>
                        <Text py="2">{el.description}</Text>
                        <Text as="b">{el.head}</Text>
                      </CardBody>
                      <CardFooter>
                        <Text>{el.address}</Text>{" "}
                      </CardFooter>
                    </Stack>
                  </Card>
                </>
              );
            })}
          </Wrap>
        </GridItem>
        <GridItem h="200" colSpan={1}>
          <Text mt="50px" fontSize={18} mb={2}>
            Student Scholarship
          </Text>
          <Wrap maxw="100%">
            {scholar.map((el) => {
              return (
                <>
                  <Card
                    maxh="100"
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Caffe Latte"
                    />
                    <Stack>
                      <CardBody>
                        <Heading size="md">{el.name}</Heading>
                        <Text py="2">{el.description}</Text>
                        <Text as="b">{el.head}</Text>
                      </CardBody>
                      <CardFooter>
                        <Text mr={3}>Contact No: </Text>{" "}
                        <Text fontWeight={600}> {el.contact}</Text>
                      </CardFooter>
                    </Stack>
                  </Card>
                </>
              );
            })}
          </Wrap>
        </GridItem>
      </Grid>
      {/* <Image src={wave1} position="absolute" bottom="0" zIndex="-50" /> */}
    </div>
  );
}

export default SupportAndScholar;
