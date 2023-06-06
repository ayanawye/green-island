import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useFormik } from "formik";
import { teamRegistration } from "@/requests/RegistLogin";
import Loading from "@/components/ui/loading/Loading";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
    .required("Обязательное поле"),
  brigades_name: Yup.string().required("Обязательное поле"),
  brigades_list: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле!").matches(/^\+[0-9]{12}$/, "Не валидный номер телефона"),
});


const BrigadeRegist = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    setToken(access);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      brigades_name: "",
      brigades_list: "",
      phone: "+996",
      user_type: "BRIGADE",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      teamRegistration(`/brigades/register/`, values, token, formik.resetForm, setLoading);
    },
  });

  return (
    <Form layout="vertical" onFinish={formik.handleSubmit} style={{ maxWidth: "100%" }}>
      <Form.Item
        label="Email:"
        hasFeedback
        validateStatus={formik.errors.email ? "error" : ""}
        help={formik.errors.email}
      >
        <Input name="email" value={formik.values.email} onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item
        label="Пароль:"
        hasFeedback
        validateStatus={formik.errors.password ? "error" : ""}
        help={formik.errors.password}
      >
        <Input.Password name="password" value={formik.values.password} onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item
        label="Подтверждение пароля:"
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
        label="Название бригады:"
        hasFeedback
        validateStatus={formik.errors.brigades_name ? "error" : ""}
        help={formik.errors.brigades_name}
      >
        <Input name="brigades_name" value={formik.values.brigades_name} onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item
        label="Список бригад:"
        hasFeedback
        validateStatus={formik.errors.brigades_list ? "error" : ""}
        help={formik.errors.brigades_list}
      >
        <Input.TextArea name="brigades_list" value={formik.values.brigades_list} onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item
        label="Новер водителя:"
        hasFeedback
        validateStatus={formik.errors.phone ? "error" : ""}
        help={formik.errors.phone}
      >
        <Input name="phone" value={formik.values.phone} onChange={formik.handleChange} />
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
