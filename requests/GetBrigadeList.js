import { BASE_URL } from "@/base_url/BASE_URL";
import { message } from "antd";
import axios from "axios";

export const getBrigadeList = async (endpoint, token, setApplication) => {
  try {
    const resp = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await resp.data;
    setApplication(data);
    console.log(data);
  } catch (e) {
    console.log(e.response);
  }
};

export const takeBrigade = async (id, bodyObj, token) => {
  const dataId = {
    brigade: bodyObj,
  }
  try {
  const resp = await axios.patch(`${BASE_URL}/add_brigade/${id}/`,dataId , {
      headers: 
      { "Authorization": `Bearer ${token}`},
    });
  const data = await resp.data.message
  message.open({
    type: "success",
    content: `${data}`,
    style: {
      marginTop: "100px"
    }
  })
  } catch (e) {
    console.log(e.response);
  }
};

export const inProcess = async (id, token) => {
  try {
  const resp = await axios.patch(`${BASE_URL}/in_progressing_status/${id}/` , {
      headers: 
      { "Authorization": `Bearer ${token}`},
    });
  const data = await resp.data.message
  message.open({
    type: "success",
    content: `${data}`,
    style: {
      marginTop: "100px"
    }
  })
  } catch (e) {
    console.log(e.response);
  }
};

export const changeBrigadeStatus = async(id, dataStatus, token) => {
  try {
    const resp = await axios.patch(`${BASE_URL}/brigade/${id}/status/`, dataStatus,  {
      headers: { "Authorization": `Bearer ${token}` },
    });
    const data = await resp.data.brigade_status;
    console.log(data)
  } catch (e) {
    console.log(e.response);
  }
}

export const changeStatus = async(id, dataStatus, token) => {
  try {
    const resp = await axios.patch(`${BASE_URL}/change_status/${id}/`, dataStatus,  {
      headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
    });
    const data = await resp.data.message;
    console.log(resp);
    message.open({
      type: "success",
      content: `Заявка успешно выполнена`,
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
  } catch (e) {
    console.log(e.response);
  }
}

