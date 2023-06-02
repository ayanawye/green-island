import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useFormik } from "formik";
import { teamRegistration } from "@/requests/RegistLogin";
import Loading from "@/components/ui/loading/Loading";

const BrigadeRegist = () => {
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    const access = resp.access
    setToken(access)
  }, [])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      brigades_name: "",
      brigades_list: "",
      user_type: "",
    },
    onSubmit: (values) => {
      teamRegistration(`/brigades/register/`, values, token, formik.resetForm, setLoading)
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

      if (!values.brigades_name) {
        errors.brigades_name = "Обязательное поле";
      }

      if (!values.brigades_list) {
        errors.brigades_list = "Обязательное поле";
      }

      return errors;
    },
  });

  const handleUserTypeChange = (e) => {
    formik.setFieldValue("user_type", e.target.checked ? "BRIGADE" : "");
  };

  return (
    <Form
      layout="vertical"
      onFinish={formik.handleSubmit}
      style={{ maxWidth: "100%" }}
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
        label="Название бригады"
        hasFeedback
        validateStatus={formik.errors.brigades_name ? "error" : ""}
        help={formik.errors.brigades_name}
      >
        <Input
          name="brigades_name"
          value={formik.values.brigades_name}
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Список бригад"
        hasFeedback
        validateStatus={formik.errors.brigades_list ? "error" : ""}
        help={formik.errors.brigades_list}
      >
        <Input.TextArea
          name="brigades_list"
          value={formik.values.brigades_list}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          checked={formik.values.user_type === "BRIGADE"}
          onChange={handleUserTypeChange}
        >
          Бригада
        </Checkbox>
      </Form.Item>
      {loading && <Loading />}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Зарегистрировать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BrigadeRegist;
