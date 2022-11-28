import axios from "axios";

const getActitivy = () => {
  const response = axios
    .get("https://www.boredapi.com/api/activity")
    .then((response) => response.data);
  return response;
};

export default getActitivy;
