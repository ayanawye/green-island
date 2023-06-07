import { Table, Button, Typography } from "antd";
import { useEffect, useState } from "react";
import s from "./OperatorPage.module.scss";
import { myApplications } from "@/requests/Applications";

const { Text } = Typography;

const DoneApplication = () => {
  const [data, setData] = useState([]);
  const [filterData, setDataFilter] = useState([])

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const access = userInfo.access;
    myApplications(access, setData);
  }, []);

  useEffect(()=>{
    const newData = data.filter( (item ) => {
     return  item.status === 'Выполнено'
    })
    setDataFilter(newData)
  }, [data])

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
        <Button disabled={true}>{record.status}</Button>
      ),
    },
  ];
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Table
          className={s.table}
          dataSource={filterData}
          columns={columns}
          rowKey="id"
        />
      </div>
    </section>
  );
};

export default DoneApplication;