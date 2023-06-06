import { Table, Button, Typography } from "antd";
import BrigadeModal from "./BrigadeModal";
import { useEffect, useState } from "react";
import s from "./OperatorPage.module.scss";
import { myApplications } from "@/requests/Applications";
import { changeStatus, getBrigadeList } from "@/requests/GetBrigadeList";

const { Text } = Typography;

const MyApplications = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [access, setAccess] = useState(null);
  const [brigade, setBrigade] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const access = userInfo.access;
    setAccess(access);
    myApplications(access, setData);
  }, []);

  const handleOpenModal = (record) => {
    setSelectedRecord(record.id)
    getBrigadeList(`/brigades/`, access, setBrigade);
    setModal(true);
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
    {
      title: "Тип заявки",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Почта клиента",
      dataIndex: "client_email",
      key: "client_email",
      render: (text, record) => (
        <a href={`mailto:${record.client_email}`}>{record.client_email}</a>
      ),
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Бригада",
      dataIndex: "brigade_phone",
      key: "brigade_phone",
      render: (text, record) => (
        <a href={`tel:${record.brigade_phone}`}>{record.brigade_phone}</a>
      ),
    },
    {
      title: "Действие",
      key: "action",
      render: (text, record) => (
        <div>
          {!record.brigade ? (
            <Button 
              onClick={() => handleOpenModal(record)} 
              type="primary"
            >
              Назначить бригаду
            </Button>
          ) : (
            <Button
              type="primary"
              disabled={!(record.finished_by_client === true && record.finished_by_brigade === true) || record.status === "Выполнено"}
              onClick={() => {
                changeStatus(record.id, {status: "Выполнено", finished_by_operator: true}, access)
              }}
            >
              {record.status === "Выполнено" ? "Завершено" : "Завершить"}
            </Button>
          )}
        </div>
      ),
    },
  ];
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Table
          className={s.table}
          dataSource={data}
          columns={columns}
          rowKey="id"
        />
        <BrigadeModal
          id={selectedRecord}
          open={modal}
          close={() => setModal(!modal)}
          data={brigade}
        />
      </div>
    </section>
  );
};

export default MyApplications;
