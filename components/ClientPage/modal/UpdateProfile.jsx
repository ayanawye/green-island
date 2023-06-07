import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { updatePatchProfile, updateProfile, updatePutProfile } from '@/requests/Profile';

const UpdateProfile = ({ open, close, data }) => {
  const [form] = Form.useForm();
  const [access, setAccess] = useState(null)

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem('userInfo'))
    setAccess(resp.access)
  }, [])
  const handleCancel = () => {
    close();
  };

  const handleSubmit = (values) => {
    const hasEmptyFields = Object.values(values).some((field) => !field)
    if(hasEmptyFields){
      updatePatchProfile(`/client-profile/${data.id}/`, values, access, close)
      form.resetFields();
    } else{
      updatePutProfile(`/client-profile/${data.id}/`, values, access, close)
      form.resetFields();
    }
  };

  if (!open) return null;
  return (
    <div className="modal" onClick={close}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <Modal open={open} onCancel={handleCancel} footer={null}>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item
              name="email"
              label="Почта"
            >
              <Input type='email' />
            </Form.Item>
            <Form.Item
              name="company_name"
              label="Название компании"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Адрес"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Номер телефона"
              rules={[
                {
                  pattern: /^\+[0-9]{12}$/,
                  message: "Не валидный номер телефона",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Пароль"
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
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

