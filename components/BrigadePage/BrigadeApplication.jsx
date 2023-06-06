import { Button, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {
  changeBrigadeStatus,
  changeStatus,
  inProcess,
} from "@/requests/GetBrigadeList";

const { Text } = Typography;

const BrigadeApplication = ({applications}) => {
  const [access, setAccess] = useState(null)

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access
    setAccess(access)
  }, []);

  const takeApplication = (record) => {
    inProcess(record.id, access)
    changeBrigadeStatus(record.brigade, {brigade_status: true}, access)
  };
  
  const finishApplication = (record) => {
    changeStatus(record.id, {finished_by_brigade: true, brigade_status: false}, access);
    // changeBrigadeStatus(record.brigade, {brigade_status: false}, access)
  }

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
      title: "Адрес клиента",
      dataIndex: "client_address",
      key: "client_address",
    },
    {
      title: "Позвонить",
      dataIndex: "client_phone",
      key: "client_phone",
      render: (text, record) => (
        <a href={`tel:${record.client_phone}`}>{record.client_phone}</a>
      ),
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Действие",
      key: "action",
      render: (text, record) => (
        <div>
          {record.status === "Новая" ? (
            <Button
              type="primary"
              disabled={record.brigade_status === true}
              onClick={() => takeApplication(record)}
            >
              Взяться за работу
            </Button>
          ) : (
            <Button 
              type="primary" 
              disabled={record.finished_by_brigade}
              onClick={() => finishApplication(record)}>
                {record.finished_by_brigade ? "Завершено" : "Завершить"}
            </Button>
          )}
        </div>
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
