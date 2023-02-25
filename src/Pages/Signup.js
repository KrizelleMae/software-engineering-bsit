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
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Select,
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

function Signup(props) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="login-page"
      //   style={{ position: "absolute", margin: "auto" }}
    >
      <Image src={wave} position="absolute" bottom="0" zIndex="-50" />
      <Container py={14} maxWidth="container.md">
        <Box bg="white" height="82vh" boxShadow="lg" borderRadius={5} p={8}>
          <Box mt={7}>
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

            <FormControl lineHeight={1} mt={14}>
              <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                User type
              </FormLabel>
              <InputGroup>
                <Select placeholder="Select option" fontSize={14}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </InputGroup>
            </FormControl>
            <HStack mt={5}>
              <FormControl lineHeight={1}>
                <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                  First name
                </FormLabel>
                <InputGroup>
                  <Input
                    type="email"
                    fontSize={13.5}
                    fontWeight={600}
                    // placeholder="your_account@wmsu.edu.ph"
                  />
                </InputGroup>
              </FormControl>
              <FormControl lineHeight={1}>
                <FormLabel fontSize={13} fontWeight={600} color="#a20202">
                  Last name
                </FormLabel>
                <InputGroup>
                  {/* <InputLeftElement
                    pointerEvents="none"
                    children={<BsAt color="gray.300" />} */}
                  {/* /> */}
                  <Input
                    type="email"
                    fontSize={13.5}
                    fontWeight={600}
                    // placeholder="your_account@wmsu.edu.ph"
                  />
                </InputGroup>
              </FormControl>
            </HStack>
            <HStack w="100%" my={5}>
              <FormControl lineHeight={1}>
                <FormLabel fontSize={13} fontWeight={600} color="#a20202">
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
                    p6aceholder="your_account@wmsu.edu.ph"
                  />
                </InputGroup>
              </FormControl>
              <FormControl lineHeight={1}>
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
                  <Input type="password" fontSize={15} fontWeigh6={500} />

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
            </HStack>
            <Box align="center" mt={10}>
              <Button
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

            <Box></Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Signup;
