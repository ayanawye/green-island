import { useState } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { postRegistRequests } from "@/requests/RegistLogin";
import * as Yup from "yup";
import s from "./Registration.module.scss";
import MyBtn from "../../ui/button/MyBtn";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/images/logo2.png";
import Loading from "@/components/ui/loading/Loading";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле!"),
  company_name: Yup.string().required("Обязательное поле!"),
  address: Yup.string().required("Обязательное поле!"),
  phone: Yup.string().required("Обязательное поле!").matches(/^\+[0-9]{12}$/, "Не валидный номер телефона"),
  password: Yup.string()
    .required("Обязательное поле")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Пароль должен быть не короче 8, должны быть: заглавные латинские буквы , строчные буквы, цифры, уникальные знаки (@$!%*?&)!"
    ),
  password_confirmation: Yup.string()
    .required("Обязательное поле")
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
});

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: "",
      company_name: "",
      address: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      postRegistRequests(`/clients/register/`, values, router, setLoading);
    },
  });

  return (
    <div className={s.regist}>
      <div className={s.reg_container}>
        <div className={s.image}>
          <Image className={s.img} src={Logo} alt="Logo" />
        </div>
        <Form
          layout="vertical"
          onFinish={formik.handleSubmit}
          className={s.form}
        >
          <h1 className={s.title}>Регистрация</h1>
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
            label="Название компании"
            hasFeedback
            validateStatus={formik.errors.company_name ? "error" : ""}
            help={formik.errors.company_name}
          >
            <Input
              name="company_name"
              value={formik.values.company_name}
              onChange={formik.handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Адрес компании:"
            hasFeedback
            validateStatus={formik.errors.address ? "error" : ""}
            help={formik.errors.address}
          >
            <Input
              name="address"
              value={formik.values.address}
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
            label="Номер телефона: +996........."
            hasFeedback
            validateStatus={formik.errors.phone ? "error" : ""}
            help={formik.errors.phone}
          >
            <Input
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </Form.Item>

          <Form.Item>
            {loading && <Loading />}
            <div className={s.btn}>
              <MyBtn type="submit">Зарегистрироваться</MyBtn>
            </div>
            <p className={s.link}>
              Уже есть аккаунт?
              <Link className={s.login} href="/login">
                Войти
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
