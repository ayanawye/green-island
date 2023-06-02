import { ErrorMessage, Form, Formik } from "formik";
import { authRequests } from "@/requests/RegistLogin";
import { useRouter } from "next/router";
import Image from "next/image";
import * as Yup from "yup";
import Logo from "../../assets/images/logo2.png";
import MyField from "../ui/input/MyField";
import MyBtn from "../ui/button/MyBtn";
import s from "./Auth.module.scss";
import { useState } from "react";
import Loading from "../ui/loading/Loading";

const validationSchema = Yup.object({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});

const Auth = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const userValues = {
    email: "",
    password: "",
  }

  const handleSubmit = async (values) => {
    authRequests(`/login/`, values, router, setLoading)
  }

  return (
    <div className={s.regist}>
      <div className={s.reg_container}>
        <div className={s.image}>
          <Image priority className={s.img} src={Logo} alt="Logo" />
        </div>
        <div className={s.form}>
          <Formik
            initialValues={userValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.formik}>
              <h1 className={s.title}>Войти</h1>
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
              {loading && <Loading />}
              <div className={s.btn}>
                <MyBtn type="submit">Войти</MyBtn>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Auth;
