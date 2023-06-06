import { useEffect, useState } from "react";
import s from "./OperatorPage.module.scss";
import { Table, Button } from "antd";
import { changeStatus, inProcess, takeBrigade } from "@/requests/GetBrigadeList";

const BrigadeModal = ({ close, open, data, id }) => {
  const [access, setAccess] = useState(null);

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    setAccess(access);
  }, []);

  const handleBrigadeSelect = (brigade) => {
    const brigadeId = brigade.id;
    takeBrigade(`${id}/`, brigadeId, access);
    close()
  };

  const columns = [
    {
      title: "№",
      key: "id",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Название бригады",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Количество заявок",
      dataIndex: "application_count",
      key: "application_count",
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
        <Table dataSource={data} columns={columns} rowKey="id" />
      </div>
    </div>
  );
};

export default BrigadeModal;
