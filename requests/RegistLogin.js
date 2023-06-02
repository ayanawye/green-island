import { BASE_URL } from "@/base_url/BASE_URL";
import { message } from "antd";
import axios from "axios";

export const postRegistRequests = async (endpoint, bodyObj, router, setLoading) => {
  try {
    setLoading(true)
    const resp = await axios.post(`${BASE_URL}${endpoint}`, bodyObj);
    const data = await resp.data
    localStorage.setItem("userInfo", JSON.stringify(data));
    message.open({
      type: "success",
      content: "Регистрация прошла успешно",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    setLoading(false)
    setTimeout(() => {
      router.push("/user")
    }, 2000);
  } catch (e) {
    message.error({
      type: "error",
      content: `${e.data}`,
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
  }
};

export const authRequests = async (endpoint, bodyObj, router, setLoading) => {
  console.log(bodyObj);
  try {
    setLoading(true)
    const resp = await axios.post(`${BASE_URL}${endpoint}`, bodyObj);
    const data = await resp.data
    const userType = data.user_type
    localStorage.setItem("userInfo", JSON.stringify(data));
    setLoading(false)
    {
      if (userType === "CLIENT") {
        return router.push("/user");
      } else if (userType === "BRIGADE") {
        return router.push("/brigade");
      }
      return router.push("/operator");
    }
  } catch (e) {
    console.log(e);
    message.open({
      type: "error",
      content: "Неправильная почта или пароль",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
  }
};

export const teamRegistration = async(endpoint, bodyObj, token, funk, setLoading) => {
  try {
    setLoading(true)
    await axios.post(`${BASE_URL}${endpoint}`, bodyObj,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setLoading(false)
    message.open({
      type: "success",
      content: "Регистрация прошла успешно!",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    })
    setTimeout(() => {
      funk()
    }, 2000)
  } 
  catch (e) {
    message.open({
      type: "error",
      content: "Пользователь с такой почтoй уже существует",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    })
  }
}
