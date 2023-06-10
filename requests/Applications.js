import { BASE_URL } from "@/base_url/BASE_URL";
import { message } from "antd";
import axios from "axios";

export const createApplication = async (endpoint, bodyObj, token, close) => {
  try{
    const resp = await axios.post(`${BASE_URL}${endpoint}`, bodyObj, {
      headers: {
      "Authorization": `Bearer ${token}`
      },
  })
    close()
  }
  catch(e){
    console.log(e.response.data);
  }
}

export const assignApplication = async(endpoint, token, bodyObj, setApplication, applications ) => {
  try{
    const resp = await axios.put(`${BASE_URL}${endpoint}`, bodyObj, {headers:
      {"Authorization": `Bearer ${token}`}
    })
    const data = await resp.data
    message.open({
      type: "success",
      content: "Добавили в ваши заявки",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    setApplication(applications.filter((e) => e.id !== bodyObj.id));
  }
  catch(e) {
    console.log(e.response);
  }
}