import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Input, Button, Select, Typography } from "antd";
import MyBtn from "@/components/ui/button/MyBtn";
import CreateApplication from "../modal/CreateApplication";
import { createApplication, getAllApplications, myApplications } from "@/requests/Applications";
import { changeBrigadeStatus, changeStatus } from "@/requests/GetBrigadeList";

const { confirm } = Modal;
const { Option } = Select;
const { Text } = Typography;

const UserList = () => {
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState(initialData);
  const [userData, setUserData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);
  const [access, setAccess] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    setAccess(access);
    setUserData(resp);
    myApplications( access, setData);
  }, [modal]);

  const handleDelete = (record) => {
    confirm({
      title: "Удалить элемент?",
      onOk() {
        const updatedData = data.filter((item) => item.id !== record.id);
        setData(updatedData);
        setSelectedItem(null);
        setModalVisible(false);
      },
    });
  };
  const handleEdit = (record) => {
    setSelectedItem(record);
    setModalVisible(true);
    form.setFieldsValue(record);
  };
  const handleModalCancel = () => {
    setModalVisible(false);
    form.resetFields();
  };
  const handleModalSave = (values) => {
    const updatedData = data.map((item) =>
      item.id === selectedItem.id ? { ...item, ...values } : item
    );
    setData(updatedData);
    setModalVisible(false);
    form.resetFields();
  };
  const finishApplication = (record) => {
    changeStatus(record.id, { finished_by_client: true }, access);
    changeBrigadeStatus(record.brigade, {brigade_status: false}, access)
  };

  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Дата",
      dataIndex: "started_create",
      key: "started_create",
      render: (started_create) => (
        <Text ellipsis={{ tooltip: started_create }}>
          {started_create.length > 10
            ? `${started_create.slice(0, 10)}`
            : started_create}
        </Text>
      ),
    },
    { title: "Тип", dataIndex: "type", key: "type" },
    {
      title: "Комментарий",
      dataIndex: "comment",
      key: "comment",
      render: (comment) => (
        <Text ellipsis={{ tooltip: comment }}>
          {comment.length > 20 ? `${comment.slice(0, 20)}...` : comment}
        </Text>
      ),
    },
    { title: "Статус", dataIndex: "status", key: "status" },
    {
      title: "Действия",
      key: "actions",
      render: (_, record) => (
        <div
          style={{ display: "flex", justifyContent: "center", columnGap: "4%" }}
        >
          <Button onClick={() => handleEdit(record)}>Подробнее</Button>
          <Button
            disabled={record.status !== "В процессе"}
            type="primary"
            onClick={() => finishApplication(record)}
          >
            {record.finished_by_client === true ? "Выполнено" : "Завершить"}
          </Button>
        </div>
      ),
    },
  ];

  const addApplication = (data) => {
    createApplication("/client/application/create/", data, userData);
  };

  const filterByStatus = (status) => {
    const filtered = data.filter((item) => {
      if (status === "Закрытые заявки") {
        return item.status === "Выполнено";
      } else if (status === "Активные заявки") {
        return item.status === "В процессе" || item.status == "Новая";
      }
      return false;
    });
  };

  return (
    <div>
      <div>
        <div>
          <Button onClick={() => filterByStatus("Закрытые заявки")}>
            Закрытые заявки
          </Button>
          <Button onClick={() => filterByStatus("Активные заявки")}>
            Активные заявки
          </Button>
        </div>
        <div>
          <MyBtn onClick={() => setModal(true)}>Создать новую заявку</MyBtn>
          <CreateApplication
            open={modal}
            close={() => setModal(false)}
            data={addApplication}
          />
        </div>
      </div>
      <Table dataSource={data} columns={columns} rowKey="id" />
      <Modal
        open={modalVisible}
        title="Подробности элемента"
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleModalSave}>
          <Form.Item name="type" label="Тип">
            <Select>
              <Option value="Вывести мусор"></Option>
              <Option value="Установка экобокса"></Option>
              <Option value="Демонтаж экобокса"></Option>
            </Select>
          </Form.Item>
          <Form.Item name="comment" label="Комментарий">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
            <Button onClick={() => handleDelete(selectedItem)}>Удалить</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserList;
