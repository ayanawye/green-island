import { BASE_URL } from "@/base_url/BASE_URL";
import axios from "axios";

export const getAllApplications = async (endpoint, token, setApplication) => {
  const resp = await axios.get(`${BASE_URL}${endpoint}`, {headers:
    {Authorization: `Bearer ${token}`}
  })
  const data = await resp.data
  console.log(data);
  setApplication(data)
}