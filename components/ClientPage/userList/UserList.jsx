import React, { useState } from "react";
import { Table, Modal, Form, Input, Button, Select, Typography } from "antd";
import MyBtn from "@/components/ui/button/MyBtn";
import CreateApplication from "../modal/CreateApplication";

const { confirm } = Modal;
const { Option } = Select;
const { Text } = Typography;

const UserList = () => {
  const [initialData, setInitialData] = useState([
    {
      id: 1,
      date: "05-01-2023",
      type: "Вывести мусор",
      status: "на рассмотрении",
      comment: "Комментарий 1",
    },
    {
      id: 2,
      date: "05-02-2023",
      type: "Установить экобокс",
      status: "в процессе",
      comment: "Комментарий 2",
    },
    {
      id: 3,
      date: "05-02-2023",
      type: "Установить экобокс",
      status: "finish",
      comment: "Комментарий 2",
    },
  ]);
  const [data, setData] = useState(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();

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

  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      render: (_, record, index) => index + 1,
    },
    { title: "Дата", dataIndex: "date", key: "date" },
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
        <div>
          <Button onClick={() => handleEdit(record)}>Подробнее</Button>
        </div>
      ),
    },
  ];
  const addApplication = (data) => {
    setData([data, ...initialData]);
  };
  const [filteredItems, setFilteredItems] = useState(data);

  const filterByStatus = (status) => {
    const filtered = data.filter((item) => {
      if (status === 'Закрытые заявки') {
        return item.status === 'finish';
      } else if (status === 'Активные заявки') {
        return item.status === 'на рассмотрении' || item.status === 'в процессе';
      }
      return false;
    });

    setFilteredItems(filtered);
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
      <Table
        dataSource={filteredItems}
        columns={columns}
        pagination={false}
        rowKey="id"
      />
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
              <Option value="Установить экобокс"></Option>
              <Option value="Демонтировать экобокс"></Option>
            </Select>
          </Form.Item>
          <Form.Item name="comment" label="Комментарий">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
            <Button onClick={() => handleDelete(selectedItem)}>Удалить</Button>
          </Form.Item>
        </Form>
      </Modal>
      <style jsx global>{`
        @media (max-width: 800px) {
          .ant-table-column-title-comment {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default UserList;
