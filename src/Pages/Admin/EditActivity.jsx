import React from "react";
import { useParams } from "react-router-dom";

function EditActivity(props) {
  const { id } = useParams();
  return <div>edit user {id}</div>;
}

export default EditActivity;
