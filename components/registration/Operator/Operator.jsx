import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useFormik } from "formik";
import axios from "axios";
import { BASE_URL } from "@/base_url/BASE_URL";

const OperatorRegist = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [token, setToken] = useState(null)
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    const access = resp.access
    setToken(access)
    setUserInfo(resp)
  }, [])


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      full_name: "",
      user_type: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const resp = await axios.post(`${BASE_URL}/operators/register/`, values, {
          headers: {
            'Authorization': `Bearer ${token}` }
        });
        console.log(resp);
      } catch (e) {
        console.log(e);
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Обязательное поле";
      }

      if (!values.password) {
        errors.password = "Обязательное поле";
      }

      if (values.password !== values.password_confirmation) {
        errors.password_confirmation = "Пароли не совпадают";
      }

      if (!values.full_name) {
        errors.full_name = "Обязательное поле";
      }

      return errors;
    },
  });

  const handleUserTypeChange = (e) => {
    formik.setFieldValue("user_type", e.target.checked ? "OPERATOR" : "");
  };

  return (
    <Form
      layout="vertical"
      onFinish={formik.handleSubmit}
      style={{ maxWidth: "300px" }}
    >
      <Form.Item
        label="Email"
        hasFeedback
        validateStatus={formik.errors.email ? "error" : ""}
        help={formik.errors.email}
      >
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        hasFeedback
        validateStatus={formik.errors.password ? "error" : ""}
        help={formik.errors.password}
      >
        <Input.Password
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Подтверждение пароля"
        hasFeedback
        validateStatus={formik.errors.password_confirmation ? "error" : ""}
        help={formik.errors.password_confirmation}
      >
        <Input.Password
          name="password_confirmation"
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Полное имя"
        hasFeedback
        validateStatus={formik.errors.full_name ? "error" : ""}
        help={formik.errors.full_name}
      >
        <Input
          name="full_name"
          value={formik.values.full_name}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item label="Роль">
        <Checkbox
          checked={formik.values.user_type === "OPERATOR"}
          onChange={handleUserTypeChange}
        >
          Оператор
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OperatorRegist;
