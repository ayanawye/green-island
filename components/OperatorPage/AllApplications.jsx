import { Table, message } from "antd";
import { useEffect, useState } from "react";
import MyBtn from "../ui/button/MyBtn";
import { getAllApplications } from "@/requests/Applications";
import s from './OperatorPage.module.scss';

const AllApplications = () => {
  const [applications, setApplication] = useState([
    { id: 1, date: "10-02-2023", type: "Вынести мусор", address: "Rekbr, 2/4" },
    { id: 2, date: "10-02-2023", type: "Вынести мусор", address: "Rekbr, 2/4" },
  ]);

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    // getAllApplications(`/applications/`, access, setApplication);
  }, []);

  const takeApplication = (record) => {
    setApplication(applications.filter((e) => e.id !== record.id));
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
      title: "Дата",
      dataIndex: "date",
      key: "date",
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
    <section className={s.section}>
      <div className={s.container}>
        <Table className={s.table} dataSource={applications} columns={columns} rowKey="id" />
      </div>
    </section>
  );
};

export default AllApplications;
