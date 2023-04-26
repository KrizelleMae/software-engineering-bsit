import { Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiPlusCircle } from "react-icons/bi";

function CustomFileButton(props) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      props.onFileSelected(file);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        // accept="image/*"
        style={{
          display: "none",
        }}
        // multiple={true}
        onChange={handleFileInputChange}
      />
      <Button size="sm" onClick={handleButtonClick} colorScheme="blue">
        {props.buttonText}
        <BiPlusCircle style={{ marginLeft: 5, fontSize: 20 }} />
      </Button>
    </>
  );
}

export default CustomFileButton;
