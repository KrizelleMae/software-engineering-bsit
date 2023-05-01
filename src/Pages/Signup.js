import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../Styles/Login.css";
import api from "../Api/api";
import {
  BsArrowRightShort,
  BsAt,
  BsEye,
  BsEyeSlash,
  BsLock,
} from "react-icons/bs";
import logo from "../Assets/logo.png";
import wave from "../Assets/wave.svg";
import Swal from "sweetalert2";

function Signup(props) {
  const [show, setShow] = useState(false);

  const [fname, setFname] = useState("");
  const [mi, setMI] = useState("");
  const [lname, setLname] = useState("");
  const [batch, setBatch] = useState("");
  const [type, setType] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tempPass, setTempPass] = useState("");
  const [adviser, setAdviser] = useState("");
  const [formData, setFormData] = useState([]);

  const [faculty, setFaculty] = useState([]);

  const isError = tempPass !== password;

  const FetchFaculty = async () => {
    let response = await api("/faculty");

    setFaculty(response.data);
  };

  const PostRequest = async (e) => {
    e.preventDefault();

    let response = await api.post("/register", {
      fname: fname,
      mi: mi,
      batch: batch,
      adviser: adviser,
      lname: lname,
      role: type,
      email: email,
      password: password,
    });

    if (response.data.message == "success") {
      Swal.fire(
        "Account registered!",
        "You may now login using your credentials. Thank you!",
        "success"
      ).then(async () => {
        window.location.href = "/login";
      });
    } else {
      Swal.fire("Error occurred!", "error").then(async () => {
        window.location.reload(false);
      });
    }

    // console.log(response);

    // console.log({
    //   fname: fname,
    //   mi: mi,
    //   batch: batch,
    //   adviser: adviser,
    //   lname: lname,
    //   role: type,
    //   email: email,
    //   password: password,
    // });
  };

  useEffect(() => {
    FetchFaculty();
  }, []);

  return (
    <div
      className="login-page"
      //   style={{ position: "absolute", margin: "auto" }}
    >
      <Image src={wave} position="absolute" bottom="0" zIndex="-50" />
      <Container py={10} maxWidth="container.md">
        <Box bg="white" height="90vh" boxShadow="lg" borderRadius={5} p={8}>
          <Box>
            <Box display="flex" alignItems="center">
              <Image src={logo} style={{ height: 50 }} borderLeftRadius={10} />
              <Box ml={2} lineHeight={1.4}>
                <Text
                  fontSize={12.3}
                  textTransform="uppercase"
                  fontWeight={600}
                  color="#a20202"
                >
                  Western Mindanao State University
                </Text>
                <Text fontSize={12} color="red.700">
                  Bachelor of Science in Information Technology
                </Text>
              </Box>
            </Box>

            <form
              onSubmit={(e) => {
                PostRequest(e);
              }}
            >
              <FormControl isRequired lineHeight={1} mt={10}>
                <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                  User type
                </FormLabel>
                <InputGroup>
                  <Select
                    fontSize={14}
                    bg="gray.100"
                    border={0}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option defaultSelected value="">
                      Select type
                    </option>
                    <option value="2">Student</option>
                    <option value="3">Alumni</option>
                  </Select>
                </InputGroup>
              </FormControl>

              {type === "2" ? (
                <HStack mt={5}>
                  <FormControl isRequired lineHeight={1} w={1500}>
                    <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                      Adviser
                    </FormLabel>
                    <InputGroup>
                      <Select
                        fontSize={14}
                        bg="gray.100"
                        border={0}
                        onChange={(e) => setAdviser(e.target.value)}
                      >
                        <option defaultSelected value="">
                          Please select
                        </option>
                        {faculty.map((el, key) => {
                          return (
                            <option key={key} value={el.id}>
                              {el.lname + ", " + el.fname + " " + el.mi + "."}
                            </option>
                          );
                        })}
                      </Select>
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired lineHeight={1}>
                    <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                      Batch started (Year)
                    </FormLabel>
                    <InputGroup>
                      {/* <InputLeftElement
                    pointerEvents="none"
                    children={<BsAt color="gray.300" />} */}
                      {/* /> */}
                      <Input
                        type="text"
                        bg="gray.100"
                        border={0}
                        fontSize={13.5}
                        fontWeight={500}
                        onChange={(e) => setBatch(e.target.value)}
                        // placeholder="your_account@wmsu.edu.ph"
                      />
                    </InputGroup>
                  </FormControl>
                </HStack>
              ) : (
                ""
              )}
              <HStack mt={5}>
                <FormControl isRequired lineHeight={1}>
                  <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                    First name
                  </FormLabel>
                  <InputGroup>
                    <Input
                      bg="gray.100"
                      border={0}
                      fontSize={13.5}
                      fontWeight={500}
                      onChange={(e) => setFname(e.target.value)}
                      // placeholder="your_account@wmsu.edu.ph"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired lineHeight={1}>
                  <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                    Last name
                  </FormLabel>
                  <InputGroup>
                    {/* <InputLeftElement
                    pointerEvents="none"
                    children={<BsAt color="gray.300" />} */}
                    {/* /> */}
                    <Input
                      bg="gray.100"
                      border={0}
                      fontSize={13.5}
                      fontWeight={500}
                      onChange={(e) => setLname(e.target.value)}
                      // placeholder="your_account@wmsu.edu.ph"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl lineHeight={1} w={40}>
                  <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                    MI
                  </FormLabel>
                  <InputGroup>
                    {/* <InputLeftElement
                    pointerEvents="none"
                    children={<BsAt color="gray.300" />} */}
                    {/* /> */}
                    <Input
                      maxLength={1}
                      bg="gray.100"
                      border={0}
                      fontSize={13.5}
                      fontWeight={500}
                      pattern="[A-Z]{1}"
                      title="1 letter only and should be capitalized"
                      onChange={(e) => setMI(e.target.value)}
                      // placeholder="your_account@wmsu.edu.ph"
                    />
                  </InputGroup>
                </FormControl>
              </HStack>
              <Stack w="100%" my={5}>
                <FormControl isRequired lineHeight={1}>
                  <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                    Email address
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsAt color="gray.300" />}
                    />
                    <Input
                      bg="gray.100"
                      border={0}
                      type="text"
                      fontSize={13.5}
                      fontWeight={500}
                      // pattern="[a-z]{2}[0-9]{9}@wmsu.edu.ph"
                      // title="Kindly use your wmsu account."
                      placeholder="your_account@wmsu.edu.ph"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  {/* <FormHelperText>Kindly use your wmsu email</FormHelperText> */}
                </FormControl>
                <HStack pt={5}>
                  <FormControl isRequired lineHeight={1}>
                    <FormLabel
                      fontSize={13}
                      fontWeight={600}
                      color="#a20202"
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
                        onChange={(e) => setPassword(e.target.value)}
                        bg="gray.100"
                        border={0}
                        type="text"
                        fontSize={15}
                        fontWeight={500}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                      />
                    </InputGroup>
                  </FormControl>
                  {/* <FormControl isRequired lineHeight={1}>
                        <FormLabel
                          fontSize={13}
                          fontWeight={600}
                          color="#a20202"
                          placeholder="your_account@wmsu.edu.ph"
                        >
                          Confirm password
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsLock color="gray.300" />}
                          />
                          <Input
                            bg="gray.100"
                            border={0}
                            type="text"
                            fontSize={15}
                            fontWeight={500}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl> */}
                </HStack>

                {!isError ? (
                  ""
                ) : (
                  <FormErrorMessage>Password doesn't match</FormErrorMessage>
                )}
              </Stack>
              <Box align="center" mt={10}>
                <Button
                  type="submit"
                  bgColor="#a20202"
                  color="white"
                  _hover={{
                    width: "70%",
                    transition: "width 1s",
                  }}
                  width="60%"
                  fontWeight="400"
                  fontSize={12}
                  mb={5}
                  rightIcon={<BsArrowRightShort />}
                >
                  SIGN UP
                </Button>
                <br />
                <Link
                  fontWeight="400"
                  fontSize={13}
                  variant="ghost"
                  href="/login"
                >
                  Already have an account? Log in here
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Signup;
