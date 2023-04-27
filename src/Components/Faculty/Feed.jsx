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
  Stack,
  Badge,
  Divider,
  HStack,
} from "@chakra-ui/react";
import moment from "moment";
import { BsThreeDotsVertical, BsFileEarmarkPdf } from "react-icons/bs";

function Feed({ title, description, file, file_name, created_at, updated_at }) {
  return (
    <Center py={2}>
      <Card minW="full">
        <CardHeader>
          <Flex gap="3">
            <Avatar name="A"></Avatar>

            <Box>
              <Heading size="sm">
                Administrator{" "}
                <Badge colorScheme="blue">{moment(created_at).fromNow()}</Badge>
              </Heading>

              <Text>CCS, Administrator</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody p={5}>
          <Heading fontSize={18}>{title}</Heading>
          <Text mt={5}>{description}</Text>

          <Box mt={10} borderRadius={4}>
            <Text mt={5} fontSize={14}>
              {"Attachments"}:
            </Text>
            <Box boxShadow="base" p={3} mt={2}>
              <Icon as={BsFileEarmarkPdf} color="red.500" fontSize={20} />
              <Link pl={2} fontSize={13} href={file}>
                {file_name}
              </Link>
            </Box>
          </Box>
        </CardBody>
        {/* <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        /> */}
        {/* <Divider color="lightgrey" /> */}
        <HStack px={6} py={4} justify={"space-between"}>
          <Text fontWeight={600} fontSize="small">
            Date Posted: {moment(created_at).format("lll")}
          </Text>
          <Text fontWeight={600} color="yellow.500" fontSize="small">
            Edited {moment(updated_at).fromNow()}
          </Text>
          {/* <Button flex="1" variant="ghost">
            Like
          </Button>
          <Button flex="1" variant="ghost">
            Comment
          </Button>`
          <Button flex="1" variant="ghost">
            Share
          </Button> */}
        </HStack>
      </Card>
    </Center>
  );
}

export default Feed;
