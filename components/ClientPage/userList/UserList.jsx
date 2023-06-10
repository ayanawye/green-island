import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Input, Button, Select, Typography } from "antd";
import CreateApplication from "../modal/CreateApplication";
import { changeStatus } from "@/requests/GetBrigadeList";
import s from "../User.module.scss";
import { useSelector } from "react-redux";

const { Option } = Select;
const { Text } = Typography;

const UserList = () => {
  const [filterData, setDataFilter] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [access, setAccess] = useState(null);
  const [form] = Form.useForm();
  const {myApplications} = useSelector(state => state.myApplications)
  
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    setAccess(access);
  }, []);

  useEffect(() => {
    const newData = myApplications.filter((item) => item.finished_by_client !== true);
    setDataFilter(newData);
  }, [myApplications]);

  const handleWatch = (record) => {
    setModalVisible(true);
    form.setFieldsValue(record);
  };
  const handleModalCancel = () => {
    setModalVisible(false);
    form.resetFields();
  };

  const finishApplication = (record) => {
    changeStatus(record.id, { finished_by_client: true }, access);
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
          <Button onClick={() => handleWatch(record)}>Подробнее</Button>
          <Button
            disabled={
              record.finished_by_client === true ||
              record.status !== "В процессе"
            }
            type="primary"
            onClick={() => finishApplication(record)}
          >
            {record.finished_by_client === true ? "Выполнено" : "Завершить"}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className={s.section}>
      <div className={s.container}>
        <div className={s.flex} style={{ marginBottom: "2vh" }}>
          <div style={{ marginLeft: "5%" }}>
            <p>Активные заявки</p>
          </div>
          <div>
            <Button type="primary" onClick={() => setModal(true)}>
              Создать новую заявку
            </Button>
          </div>
        </div>
        <Table dataSource={filterData} columns={columns} rowKey="id" />
      </div>
      <Modal
        open={modalVisible}
        title="Подробности элемента"
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form form={form}>
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
        </Form>
      </Modal>
      <CreateApplication
        open={modal}
        close={() => setModal(false)}
        // data={}
      />
    </div>
  );
};

export default UserList;
