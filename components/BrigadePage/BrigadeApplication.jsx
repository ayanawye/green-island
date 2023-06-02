import { Table, Typography } from "antd";
import { useState } from "react";
import MyBtn from "../ui/button/MyBtn";

const { Text } = Typography;

const BrigadeApplication = () => {
  const [applications, setApplication] = useState([
    { id: 1, comment: "", type: "Вынести мусор", address: "Rekbr, 2/4", call: "0708780274" },
  ]);
  const takeApplication = (record) => {
    message.open({
      type: "success",
      content: "Добавили в ваши заявки",
      style: {
        marginTop: "5%",
        fontSize: "20px",
      },
    });
  };
  const columns = [
    {
      title: "№",
      key: "id",
      render: (_, record, index) => index + 1,
    },
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
    {
      title: "Тип заявки",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Позвонить",
      dataIndex: "call",
      key: "call",
      render: (text, record) => (
        <a href={`tel:${record.call}`}>{record.call}</a>
      )
    },
    {
      title: "Действие",
      key: "action",
      render: (text, record) => (
        <MyBtn type="primary" onClick={() => takeApplication(record)}>
          Взяться за работу
        </MyBtn>
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={applications} columns={columns} rowKey="id" />;
    </div>
  );
};

export default BrigadeApplication;