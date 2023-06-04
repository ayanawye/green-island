import { Table } from "antd";
import React, { useState } from "react";
import s from './OperatorPage.module.scss';

const BrigadeList = () => {
  const [brigades, setBrigades] = useState([
    {
      id: 2,
      name: "Бригада 3",
      requestDayCount: 5,
      requestMonthCount: 33,
      call: "0708780274",
    },
    {
      id: 1,
      name: "Бригада 1",
      requestDayCount: 5,
      requestMonthCount: 21,
      call: "0708780274",
    },
  ]);
  const columns = [
    {
      title: "№",
      key: "id",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Название бригады",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Количество заявок за сегодня",
      dataIndex: "requestDayCount",
      key: "requestDayCount",
    },
    {
      title: "Количество заявок за месяц",
      dataIndex: "requestMonthCount",
      key: "requestMonthCount",
    },
    {
      title: "Позвонить",
      key: "call",
      render: (text, record) => (
        <a href={`tel:${record.call}`}>{record.call}</a>
      ),
    },
  ];
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Table className={s.table} dataSource={brigades} columns={columns} rowKey="id" />;
      </div>
    </section>
  );
};

export default BrigadeList;
