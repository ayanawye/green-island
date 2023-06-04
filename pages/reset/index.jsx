import { useState } from "react";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { resetPassword } from "@/requests/RegistLogin";
import * as Yup from "yup";
import s from "./Reset.module.scss";
import MyBtn from "../../components/ui/button/MyBtn";
import Image from "next/image";
import Logo from "../../assets/images/logo2.png";
import Loading from "@/components/ui/loading/Loading";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Не валидная почта").required("Обязательное поле!"),
});

const Index = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      resetPassword("/resetpassword/", values, router, setLoading)
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

          <Form.Item>
            {loading && <Loading />}
            <div className={s.btn}>
              <MyBtn type="submit">Восстановить</MyBtn>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Index;