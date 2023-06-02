import { useEffect, useState } from "react";
import s from "./OperatorPage.module.scss";
import { Table, Button } from "antd";

const BrigadeModal = ({ close, open }) => {
  const [brigadesData, setBrigadeData] = useState([
    { id: 1, name: "Бригада 1", requestCount: 5 },
    { id: 2, name: "Бригада 3", requestCount: 7 },
    { id: 3, name: "Бригада 3", requestCount: 7 },
    { id: 4, name: "Бригада 3", requestCount: 7 },
  ]);

  const handleBrigadeSelect = (brigade) => {
    console.log(brigade);
    // бригада выброна
  };

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
      title: "Количество заявок",
      dataIndex: "requestCount",
      key: "requestCount",
    },
    {
      title: "Выбрать",
      key: "action",
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => handleBrigadeSelect(record)}>
            Выбрать
        </Button>
      ),
    },
  ];
  if (!open) return null;

  return (
    <div className={s.modal} onClick={close}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        <Table dataSource={brigadesData} columns={columns} rowKey="id" />;
      </div>
    </div>
  );
};

export default BrigadeModal;
