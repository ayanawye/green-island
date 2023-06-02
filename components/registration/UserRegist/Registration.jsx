import { postRegistRequests } from "@/requests/RegistLogin";
import { ErrorMessage, Form, Formik } from "formik";
import { BASE_URL } from "../../../base_url/BASE_URL";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MyBtn from "../../ui/button/MyBtn";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo2.png";
import MyField from "../../ui/input/MyField";
import s from "./Registration.module.scss";
import * as Yup from "yup";
import Loading from "@/components/ui/loading/Loading";

const validationSchema = Yup.object({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле!"),
  company_name: Yup.string().required("Обязательное поле!"),
  address: Yup.string().required("Обязательное поле!"),
  phone: Yup.string().required("Обязательное поле!"),
  password: Yup.string()
    .required("Обязательное поле")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Пароль должен быть не короче 8, должны быть: заглавные буквы , строчные буквы, цифры, уникальные знаки (@$!%*?&)!"
    ),
  password_confirmation: Yup.string()
    .required("Обязательное поле")
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
});

const Registration = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialValues, setInitialValues] = useState({
    email: "",
    company_name: "",
    address: "",
    phone: "+996",
    password: "",
    password_confirmation: "",
  });

  const [userInfo , setUserInfo]  = useState({})
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(userInfo)
  }, [])
  const id = userInfo.user_id

  const handleSubmit = async (values) => {
    postRegistRequests(`/clients/register/`, values, router, id, setLoading)
  };

  return (
    <div className={s.regist}>
      <div className={s.reg_container}>
        <div className={s.image}>
          <Image className={s.img} src={Logo} alt="Logo" />
        </div>
        <div className={s.form}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.formik}>
              <h1 className={s.title}>Register</h1>
              <div className={s.input}>
                <MyField
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                  style={{ color: "red" }}
                />
              </div>
              <div className={s.input}>
                <MyField
                  placeholder="Название компании"
                  type="text"
                  id="company_name"
                  name="company_name"
                />
                <ErrorMessage
                  name="company_name"
                  component="div"
                  className="error-message"
                  style={{ color: "red" }}
                />
              </div>
              <div className={s.input}>
                <MyField
                  placeholder="Адрес компании"
                  type="text"
                  id="address"
                  name="address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message"
                  style={{ color: "red" }}
                />
              </div>
              <div className={s.input}>
                <MyField
                  placeholder="Номер телефона +996"
                  type="text"
                  id="phone"
                  name="phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                  style={{ color: "red" }}
                />
              </div>
              <div className={s.input}>
                <MyField
                  placeholder="Пароль"
                  type="password"
                  id="password"
                  name="password"
                  />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                  style={{ color: "red" }}
                  />
              </div>
              <div className={s.input}>
                <MyField
                  placeholder="Повторите пароль"
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                />
                <ErrorMessage
                  name="password_confirmation"
                  component="div"
                  className="error-message"
                  style={{ color: "red" }}
                />
              </div>
              {loading && <Loading />}
              <div className={s.btn}>
                <MyBtn type="submit">Register</MyBtn>
              </div>
              <p className={s.link}>
                Уже есть аккаунт?{" "}
                <Link className={s.login} href="/login">
                  Войти
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;
