import { BASE_URL } from "@/base_url/BASE_URL";
import axios from "axios";

export const getProfile = async (endpoint, token, setData) => {
  try{
    const resp = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
      "Authorization": `Bearer ${token}`
      },
  })
    const data = await resp.data
    console.log(data);
    setData(data)
  }
  catch(e){
    console.log(e.response.data);
  }
}

export const updateProfile = async(endpoint, bodyObj, token) => {
  try{
    const resp = await axios.patch(`${BASE_URL}${endpoint}`, bodyObj,  {
      headers: {
      "Authorization": `Bearer ${token}`
      },
  })
    console.log(resp);
  }
  catch(e){
    console.log(e.response.data);
  }
}