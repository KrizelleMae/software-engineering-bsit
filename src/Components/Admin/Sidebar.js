import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Collapse,
  Stack,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiChevronDown,
  FiFilePlus,
  FiUsers,
  FiList,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import logo from "../../Assets/logo.png";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BiDownload, BiNews, BiPaperPlane, BiUserPlus } from "react-icons/bi";
import { BsFilePerson } from "react-icons/bs";
import { IoLinkSharp } from "react-icons/io5";
import "../../Styles/Sidebar.css";
import LogoutBtn from "../LogoutBtn";

const path = window.location.pathname;

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="16" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem
        mt={5}
        icon={FiHome}
        className={path.includes("admin/dashboard") ? "active" : ""}
      >
        Dashboard
      </NavItem>
      <NavItem
        icon={BiNews}
        className={path.includes("admin/news-announcement") ? "active" : ""}
      >
        <Link
          fontSize={13}
          fontWeight={600}
          _hover={{ textDecoration: "none" }}
          href="/admin/news-announcement"
        >
          News
        </Link>
      </NavItem>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        pr={6}
        _hover={{
          bg: "gray.100",
          color: "alpha.600",
        }}
        className={path.includes("admin/about") ? "active" : ""}
      >
        <NavItem icon={FiFilePlus}>
          <Link
            fontSize={13}
            fontWeight={600}
            _hover={{ textDecoration: "none" }}
            href="/admin/about"
          >
            About
          </Link>
        </NavItem>

        {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
      </Flex>
      {/* ABOUT */}
      {/* <Collapse in={isOpen} animateOpacity>
        <Stack pl={8} py={3} bg="red.50">
          <Box py={2}>
            <Link fontSize={13}
            fontWeight={600} _hover={{textDecoration: 'none'}} href="/admin/about/mission-vision">Mission and Vision</Link>
          </Box>
          <Box py={2}>
            <Link fontSize={13}
            fontWeight={600} _hover={{textDecoration: 'none'}} href="/admin/about/objectives">Objectives</Link>
          </Box>
          <Box py={2}>
            <Link fontSize={13}
            fontWeight={600} _hover={{textDecoration: 'none'}} href="/admin/about/outcomes">Program Outcomes</Link>
          </Box>
        </Stack>
      </Collapse> */}

      {/* ABOUT */}
      <NavItem
        icon={FiUsers}
        className={path.includes("admin/faculty") ? "active" : ""}
      >
        <Link
          fontSize={13}
          fontWeight={600}
          _hover={{ textDecoration: "none" }}
          href="/admin/faculty"
        >
          Faculty
        </Link>
      </NavItem>

      <NavItem
        icon={FiList}
        className={path.includes("admin/programs") ? "active" : ""}
      >
        <Link
          fontSize={13}
          fontWeight={600}
          _hover={{ textDecoration: "none" }}
          href="/admin/programs"
        >
          Programs
        </Link>
      </NavItem>

      <NavItem
        icon={BiDownload}
        className={path.includes("admin/downloadables") ? "active" : ""}
      >
        <Link
          fontSize={13}
          fontWeight={600}
          _hover={{ textDecoration: "none" }}
          href="/admin/downloadables"
        >
          Downloadables
        </Link>
      </NavItem>

      <NavItem
        icon={BiUserPlus}
        className={path.includes("admin/students") ? "active" : ""}
      >
        <Link
          fontSize={13}
          fontWeight={600}
          _hover={{ textDecoration: "none" }}
          href="/admin/students"
        >
          Students
        </Link>
      </NavItem>

      <NavItem
        icon={BiPaperPlane}
        className={path.includes("admin/memo") ? "active" : ""}
      >
        <Link
          fontSize={13}
          fontWeight={600}
          _hover={{ textDecoration: "none" }}
          href="/admin/memo"
        >
          Memorandum
        </Link>
      </NavItem>
      <NavItem
        icon={IoLinkSharp}
        className={path.includes("admin/surveylink") ? "active" : ""}
      >
        <Link
          fontSize={13}
          fontWeight={600}
          _hover={{ textDecoration: "none" }}
          href="/admin/surveylink"
        >
          Links
        </Link>
      </NavItem>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      fontSize={13}
      fontWeight={600}
      _hover={{ textDecoration: "none" }}
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        py={5}
        px={7}
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
          color: "alpha.600",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "alpha.600",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      px={{ base: 6, md: 8 }}
      height="16"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      pos="fixed"
      w={"100%"}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box display="flex" alignItems="center">
        <Image src={logo} width={35} />

        <Text lineHeight={1} textAlign="left" ml={2} fontWeight={500}>
          BSIT Content Management System
        </Text>
      </Box>

      <HStack spacing={{ base: "0", md: "6" }}>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={"center"}>
          <Menu sx={{ zIndex: 50 }}>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src="https://bit.ly/broken-link" />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">ADMIN</Text>
                  <Text fontSize="xs">BSIT-CCS</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              {/* <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem> */}

              {/* <MenuDivider /> */}
              <MenuItem
              // onClick={() => {
              //   sessionStorage.setItem("loggedIn", false);
              //   sessionStorage.removeItem("user");
              //   window.location.href = "/";
              // }}
              >
                <LogoutBtn />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
