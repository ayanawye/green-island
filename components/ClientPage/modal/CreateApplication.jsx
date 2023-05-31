import { Form, Input, Select, Button, Modal } from "antd";
import s from "./Modal.module.scss";

const { Option } = Select;

const CreateApplication = ({ data, close, open }) => {
  const [form] = Form.useForm();
  const handleModalClose = () => {
    form.resetFields();
    close();
  };
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const handleModalCreate = (values) => {
    data({
      ...values,
      status: "На рассмотрении",
      date: `${day}-${month}-${year}`,
      id: 4,
    });
    form.resetFields();
    close();
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
                <Option value="Вывести мусор"></Option>
                <Option value="Установить экобокс"></Option>
                <Option value="Демонтировать экобокс"></Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default CreateApplication;
