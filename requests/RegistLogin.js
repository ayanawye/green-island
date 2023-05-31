import { message } from "antd";
import axios from "axios";

export const postRegistRequests = async (endpoint, bodyObj, router) => {
  try {
    const resp = await axios.post(endpoint, bodyObj);
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

export const authRequests = async (endpoint, bodyObj, router) => {
  console.log(bodyObj);
  try {
    const resp = await axios.post(endpoint, bodyObj);
    const data = await resp.data
    const userType = data.user_type
    localStorage.setItem("userInfo", JSON.stringify(data));
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

export const teamRegistration = async(endpoint, bodyObj, token, funk) => {
  try {
    await axios.post(endpoint, bodyObj,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
