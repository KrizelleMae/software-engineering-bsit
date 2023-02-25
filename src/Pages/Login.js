import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../Styles/Login.css";
import {
  BsArrowRight,
  BsArrowRightShort,
  BsAt,
  BsEye,
  BsEyeSlash,
  BsLock,
} from "react-icons/bs";
import ccs from "../Assets/ccs.jpg";
import logo from "../Assets/logo.png";
import wave from "../Assets/wave.svg";

function Login(props) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="login-page"
      //   style={{ position: "absolute", margin: "auto" }}
    >
      <Image src={wave} position="absolute" bottom="0" zIndex="-50" />
      <Container py={16} maxWidth="container.lg">
        <Grid
          templateColumns={{ lg: "repeat(7, 1fr)", sm: "repeat(1, 1fr)" }}
          bg="white"
          height="80vh"
          boxShadow="lg"
          borderRadius={5}
        >
          <GridItem
            w="100%"
            display={{ sm: "none", md: "none", lg: "block" }}
            colSpan={4}
          >
            <img src={ccs} style={{ height: "80vh" }} />
          </GridItem>
          <GridItem w="100%" colSpan={3} p={7}>
            <Box mt={30}>
              <Box display="flex" alignItems="center">
                <Image
                  src={logo}
                  style={{ height: 50 }}
                  borderLeftRadius={10}
                />
                <Box ml={2} lineHeight={1.4}>
                  <Text
                    fontSize={12.3}
                    textTransform="uppercase"
                    fontWeight={600}
                    color="#a20202"
                  >
                    Western Mindanao State University
                  </Text>{" "}
                  <Text fontSize={12} color="red.700">
                    Bachelor of Science in Information Technology
                  </Text>
                </Box>
              </Box>
              <Stack w="100%" mt={24}>
                <FormControl>
                  <FormLabel fontSize={14} color="#a20202" fontWeight="bold">
                    Email address
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsAt color="gray.300" />}
                    />
                    <Input
                      type="email"
                      fontSize={13.5}
                      fontWeight={500}
                      placeholder="your_account@wmsu.edu.ph"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl pt={2} pb={6}>
                  <FormLabel
                    fontSize={14}
                    color="#a20202"
                    fontWeight="bold"
                    placeholder="your_account@wmsu.edu.ph"
                  >
                    Password
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsLock color="gray.300" />}
                    />
                    <Input type="password" fontSize={15} fontWeight={500} />

                    <InputRightElement
                      pointerEvents="none"
                      children={
                        show ? (
                          <BsEye color="gray.300" />
                        ) : (
                          <BsEyeSlash color="gray.300" />
                        )
                      }
                      onclick={() => {
                        setShow(true);
                      }}
                    />
                  </InputGroup>
                </FormControl>

                <Box align="center">
                  <Button
                    bgColor="#a20202"
                    color="white"
                    _hover={{
                      width: "100%",
                      transition: "width 1s",
                    }}
                    width="85%"
                    fontWeight="400"
                    fontSize={12}
                    mb={5}
                    rightIcon={<BsArrowRightShort />}
                  >
                    LOGIN
                  </Button>
                  <br />
                  <Link
                    fontWeight="400"
                    fontSize={13}
                    variant="ghost"
                    href="/signup"
                  >
                    Create an account
                  </Link>
                </Box>

                <Box></Box>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
