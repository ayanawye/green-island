import { BASE_URL } from "@/base_url/BASE_URL";
import { message } from "antd";
import axios from "axios";

export const getProfile = async (endpoint, token, setData) => {
  try {
    const resp = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.data;
    setData(data);
  } catch (e) {
    console.log(e.response.data);
  }
};

export const updatePatchProfile = async (endpoint, bodyObj, token, close) => {
  try {
    const resp = await axios.patch(`${BASE_URL}${endpoint}`, bodyObj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(resp);
    message.open({
      type: "success",
      content: "Профиль изменен",
      style: {
        marginTop: "100px",
      },
    });
    close();
  } catch (e) {
    message.open({
      type: "error",
      content: `${e.response.data.email}`,
      style: {
        marginTop: "100px",
      },
    });
  }
};

export const updatePutProfile = async (endpoint, bodyObj, token, close) => {
  try {
    const resp = await axios.put(`${BASE_URL}${endpoint}`, bodyObj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(resp);
    message.open({
      type: "success",
      content: "Профиль изменен",
      style: {
        marginTop: "100px",
      },
    });
    close();
  } catch (e) {
    message.open({
      type: "error",
      content: `${e.response.data.email}`,
      style: {
        marginTop: "100px",
      },
    });
  }
};
