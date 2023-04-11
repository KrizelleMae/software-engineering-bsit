import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  Badge,
} from "@chakra-ui/react";
import moment from "moment";
import { BsThreeDotsVertical, BsFileEarmarkPdf } from "react-icons/bs";

function Feed(props) {
  return (
    <Center py={2}>
      <Card maxW="2xl">
        <CardHeader>
          <Flex gap="3">
            <Avatar name="EE Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">
                John Ed Escorial <Badge colorScheme="blue">New</Badge>
              </Heading>

              <Text>CCS, IT Head</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <Heading fontSize={18}>MEMORANDUM</Heading>
          <Text mt={5}>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
          {[...Array(2)].map(() => {
            return (
              <>
                <Box my={2} boxShadow="sm" p={3} display="flex">
                  <Icon as={BsFileEarmarkPdf} color="red.500" fontSize={20} />
                  <Link pl={2} fontSize={13}>
                    File upload.pdf
                  </Link>
                </Box>
              </>
            );
          })}
        </CardBody>
        {/* <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        /> */}

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          // sx={{
          //   "& > button": {
          //     minW: "136px",
          //   },
          // }}
        >
          <Text fontSize={15} align="right">
            Date Posted: {moment().format("lll")}
          </Text>

          {/* <Button flex="1" variant="ghost">
            Like
          </Button>
          <Button flex="1" variant="ghost">
            Comment
          </Button>
          <Button flex="1" variant="ghost">
            Share
          </Button> */}
        </CardFooter>
      </Card>
    </Center>
  );
}

export default Feed;
