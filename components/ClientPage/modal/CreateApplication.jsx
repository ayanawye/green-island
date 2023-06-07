import { Form, Input, Select, Button, Modal } from "antd";
import s from "./Modal.module.scss";
import { createApplication } from "@/requests/Applications";
import { useEffect, useState } from "react";

const { Option } = Select;

const CreateApplication = ({ close, open }) => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState([])
  const handleModalClose = () => {
    form.resetFields();
    close();
  };
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    const access = resp.access
    setUserData(access)
  }, [])

  const handleModalCreate = (values) => {
    createApplication(`/client/application/create/`, values, userData, close)
    form.resetFields();
  };

  if (!open) return null;

  return (
    <div className={s.modal} onClick={close}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        <Modal
          title="Создание элемента"
          open={open}
          onCancel={handleModalClose}
          footer={[
            <Button key="cancel" onClick={handleModalClose}>
              Отмена
            </Button>,
            <Button key="create" type="primary" onClick={form.submit}>
              Создать
            </Button>,
          ]}
        >
          <Form form={form} onFinish={handleModalCreate}>
            <Form.Item
              name="comment"
              label="Комментарий"
              rules={[
                {
                  required: true,
                  message: "Обязательное поле для заполнения",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="type"
              label="Действие"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите действие",
                },
              ]}
            >
              <Select>
                <Option value="Вывоз мусора"></Option>
                <Option value="Установка экобокса"></Option>
                <Option value="Демонтаж экобокса"></Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default CreateApplication;
