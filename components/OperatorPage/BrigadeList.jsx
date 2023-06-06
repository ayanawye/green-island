import { Table } from "antd";
import React, { useEffect, useState } from "react";
import s from './OperatorPage.module.scss';
import { getBrigadeList } from "@/requests/GetBrigadeList";

const BrigadeList = () => {
  const [brigades, setBrigades] = useState([]);
  const columns = [
    {
      title: "№",
      key: "id",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Название бригады",
      dataIndex: "brigades_name",
      key: "brigades_name",
    },
    {
      title: "Количество заявок за сегодня",
      dataIndex: "application_count",
      key: "application_count",
    },
    {
      title: "Почта",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Позвонить",
      key: "phone",
      render: (text, record) => (
        <a href={`tel:${record.phone}`}>{record.phone}</a>
      ),
    },
  ];


  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem('userInfo'))
    const access = resp.access
    getBrigadeList(`/brigades/`, access, setBrigades)
  }, [])

  return (
    <section className={s.section}>
      <div className={s.container}>
        <Table className={s.table} dataSource={brigades} columns={columns} rowKey="id" />
      </div>
    </section>
  );
};

export default BrigadeList;
