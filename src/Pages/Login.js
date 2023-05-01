import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../Styles/Login.css";
import {
  BsArrowRightShort,
  BsAt,
  BsEye,
  BsEyeSlash,
  BsLock,
} from "react-icons/bs";
import ccs from "../Assets/ccs.jpg";
import logo from "../Assets/logo.png";
import wave from "../Assets/wave.svg";
import api from "../Api/api";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const PostRequest = async (e) => {
    e.preventDefault();

    // navigate("/admin");
    try {
      let response = await api.post("/login", {
        email: email,
        password: password,
      });

      console.log(response);

      // const role = response.data.user.role;

      // console.log(role);
      // if (response.data.status === 1) {
      //   if (
      //     typeof Storage !== "undefined" &&
      //     typeof sessionStorage !== "undefined"
      //   ) {
      //     // Session Storage is available
      //     sessionStorage.setItem("loggedIn", true);
      //     sessionStorage.setItem("user", JSON.stringify(response.data.user));

      //     if (response.data.user.role == 0) {
      //       navigate("/admin");
      //     } else if (response.data.user.role == 1) {
      //       navigate("/faculty");
      //     } else if (response.data.user.role == 2) {
      //       navigate("/student");
      //     } else if (response.data.user.role == 3) {
      //       navigate("/alumni");
      //     }
      //   } else {
      //     // Session Storage is not supported
      //     alert("Session not available");
      //   }
      // } else {
      //   toast.error("Invalid credentials.", {
      //     position: "top-center",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "colored",
      //   });
      // }
    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // console.log(response);
  };
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
            <img src={ccs} style={{ height: "80vh" }} alt="" />
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
              <form onSubmit={PostRequest}>
                <Stack w="100%" mt={24}>
                  <FormControl isRequired>
                    <FormLabel fontSize={14} color="#a20202" fontWeight="bold">
                      Email address
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsAt color="gray.300" />}
                      />
                      <Input
                        type="text"
                        fontSize={13.5}
                        fontWeight={500}
                        // pattern="[a-z]{2}[0-9]{9}@wmsu.edu.ph"
                        // title="Kindly use your wmsu email."
                        placeholder="your_account@wmsu.edu.ph"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl pt={2} pb={6} isRequired>
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
                      <Input
                        type="text"
                        fontSize={15}
                        fontWeight={500}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      {/* <InputRightElement
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
                    /> */}
                    </InputGroup>
                  </FormControl>
                  <Box align="center">
                    <Button
                      type="submit"
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
                </Stack>
              </form>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
