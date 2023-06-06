import { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { authRequests } from "@/requests/RegistLogin";
import * as Yup from "yup";
import s from "./Auth.module.scss";
import MyBtn from "../../components/ui/button/MyBtn";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo2.png";
import Loading from "@/components/ui/loading/Loading";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле!"),
  password: Yup.string()
    .required("Обязательное поле")
    
});

const Auth = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      authRequests(`/login/`, values, router, setLoading, error, setError)
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
          <h1 className={s.title}>Войти</h1>
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

          <Form.Item>
            {loading && <Loading />}
            <div className={s.btn}>
              <MyBtn type="submit">Войти</MyBtn>
            </div>
            {error.length >= 3 ? <p style={{marginTop: "2vh"}}>Забыли пароль? <Link href="/reset" onClick={()=>{setError([])}}  style={{color: "#215700"}}>Восстановить</Link></p> : ''}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Auth;