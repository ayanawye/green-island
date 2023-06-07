import { BASE_URL } from "@/base_url/BASE_URL";
import { message } from "antd";
import axios from "axios";

export const postRegistRequests = async (
  endpoint,
  bodyObj,
  router,
  setLoading
) => {
  try {
    setLoading(true);
    const resp = await axios.post(`${BASE_URL}${endpoint}`, bodyObj);
    const data = await resp.data;
    localStorage.setItem("userInfo", JSON.stringify(data));
    message.open({
      type: "success",
      content: "Регистрация прошла успешно",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    setLoading(false);
    setTimeout(() => {
      router.push("/user");
    }, 2000);
  } catch (e) {
    console.log(e);
    message.error({
      type: "error",
      content: `${e.response.data.email}`,
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    setLoading(false);
  }
};

export const authRequests = async (
  endpoint,
  bodyObj,
  router,
  setLoading,
  error,
  setError
) => {
  try {
    setLoading(true);
    const resp = await axios.post(`${BASE_URL}${endpoint}`, bodyObj );
    const data = await resp.data;
    const userType = data.user_type;
    localStorage.setItem("userInfo", JSON.stringify(data));
    setLoading(false);
    {
      if (userType === "CLIENT") {
        return router.push("/user");
      } else if (userType === "BRIGADE") {
        return router.push("/brigade");
      }
      return router.push("/operator");
    }
  } catch (e) {
    setLoading(false);
    message.open({
      type: "error",
      content: `${e.response.data.non_field_errors}`,
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    const addError = () => {
      setError([...error, e]);
    };
    addError();
  }
};

export const resetPassword = async (endpoint, bodyObj, router, setLoading) => {
  try {
    setLoading(true);
    const resp = await axios.post(`${BASE_URL}${endpoint}`, bodyObj);
    console.log(resp);
    setLoading(false);
    message.open({
      type: "success",
      content: "Проверьте почту",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  } catch (e) {
    console.log(e);
    message.open({
      type: "error",
      content: `${e.response.data.error}`,
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    setLoading(false);
  }
};

export const teamRegistration = async (
  endpoint,
  bodyObj,
  token,
  funk,
  setLoading
) => {
  try {
    setLoading(true);
    await axios.post(`${BASE_URL}${endpoint}`, bodyObj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    message.open({
      type: "success",
      content: "Регистрация прошла успешно!",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
    setTimeout(() => {
      funk();
    }, 5000);
  } catch (e) {
    const email = e.response.data.email;
    const token = e.response.data.detail;
    {
      email
        ? message.open({
            type: "error",
            content: `${email}`,
            style: {
              marginTop: "5%",
              fontSize: "20px",
            },
          })
        : message.open({
            type: "error",
            content: `${token}`,
            style: {
              marginTop: "5%",
              fontSize: "20px",
            },
          });
    }
    setLoading(false);
  }
};
