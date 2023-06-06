import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import s from "./Modal.module.scss";
import { updateProfile } from "@/requests/Profile";

const UpdateProfile = ({ open, close, data }) => {
  const [form] = Form.useForm();
  const [initialData, setInitialData] = useState(data);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    setUserData(resp);
  }, []);

  const handleCancel = () => {
    close();
  };

  const handleSubmit = (values) => {
    console.log(values);
    updateProfile(`/client-profile/edit/`, values,  userData.access)
    close();
  };

  if (!open) return null;
  return (
    <div className={s.modal} onClick={close}>
  <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
    <Modal open={open} onCancel={handleCancel} footer={null}>
      <Form form={form} initialValues={data} onFinish={handleSubmit}>
        <Form.Item
          name="email"
          label="Почта"
          rules={[
            {
              required: true,
              message: "Обязательное поле для заполнения",
            },
          ]}
        >
          <Input value={data.email} onChange={(e) => setInitialData({ ...data, email: e.target.value })} />
        </Form.Item>
        <Form.Item
          name="company_name"
          label="Название компании"
          rules={[
            {
              required: true,
              message: "Обязательное поле для заполнения",
            },
          ]}
        >
          <Input value={data.company_name} onChange={(e) => setInitialData({ ...data, company_name: e.target.value })} />
        </Form.Item>
        <Form.Item
          name="address"
          label="Адрес"
          rules={[
            {
              required: true,
              message: "Обязательное поле для заполнения",
            },
          ]}
        >
          <Input value={data.address} onChange={(e) => setInitialData({ ...data, address: e.target.value })} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Номер телефона"
          rules={[
            {
              required: true,
              message: "Обязательное поле для заполнения",
            },
          ]}
        >
          <Input value={data.phone} onChange={(e) => setInitialData({ ...data, phone: e.target.value })} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">
            Изменить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  </div>
</div>
  );
};

export default UpdateProfile;
