import axios from "axios";

const url = "https://api.cloudinary.com/v1_1/de0h9yawl/image/upload";

const cloudinary = axios.create({
  baseURL: url,
});

export default cloudinary;
