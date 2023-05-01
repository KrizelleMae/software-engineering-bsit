import { Button } from "@chakra-ui/react";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import Swal from "sweetalert2";

function LogoutBtn(props) {
  const logout = () => {
    Swal.fire({
      //   title: "Are you sure you want to log out?",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();

        window.location.href = "/";
      }
    });
  };
  return (
    <div>
      <Button
        size="sm"
        colorScheme="red"
        rightIcon={<BiLogOutCircle />}
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
}

export default LogoutBtn;
