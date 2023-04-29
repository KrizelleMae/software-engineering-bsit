import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Stack,
} from "@chakra-ui/react";
import api from "../Api/api";

function AlumniDetails(props) {
  const [data, setData] = useState([]);

  const getAlumni = async () => {
    let response = await api.get(`/alumni/${props.id}`);

    if (response) {
      setData(response.data);
    }
  };

  useEffect(() => {
    getAlumni();
  }, [props.id]);
  return (
    <div>
      {!data ? (
        <Alert mt={7} status="info" variant="left-accent">
          <AlertIcon />
          <AlertTitle>Edit your profile.</AlertTitle>
          <AlertDescription>
            Kindly edit your profile to view account details. Thank you!
          </AlertDescription>
        </Alert>
      ) : (
        data.map((el, key) => {
          return (
            <>
              <Stack spacing="25px" p={4}></Stack>
            </>
          );
        })
      )}
    </div>
  );
}

export default AlumniDetails;
