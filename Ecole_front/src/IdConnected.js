import axios from "axios";
import { authentified } from "../authentified";

const getWhoIsConnected = async () => {
  try {
    const { data } = await axios.get(`${url}/auth`, authentified);
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};
export default getWhoIsConnected();
