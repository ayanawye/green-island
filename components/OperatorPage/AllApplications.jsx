import { Button, Table, Typography, message } from "antd";
import { useEffect, useState } from "react";
import MyBtn from "../ui/button/MyBtn";
import { assignApplication, getAllApplications } from "@/requests/Applications";
import s from './OperatorPage.module.scss';


const { Text } = Typography;
const AllApplications = () => {
  const [applications, setApplication] = useState([]);
  const [access, setAccess] = useState(null)

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    setAccess(access)
    getAllApplications(`/all_applications/`, access, setApplication);
  }, []);

  const takeApplication = (record) => {
    assignApplication(`/operator/${record.id}/my_applications/`, access, record, setApplication, applications)
  };

  const columns = [
    {
      title: "№",
      key: "id",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Дата",
      dataIndex: "started_create",
      key: "started_create",
      render: (started_create) => (
        <Text ellipsis={{ tooltip: started_create }}>
          {started_create.length > 10 ? `${started_create.slice(0, 10)}` : started_create}
        </Text>
      ),
    },
    {
      title: "Тип заявки",
      dataIndex: "type",
      key: "type",
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
      title: "Действие",
      key: "action",
      render: (text, record) => (
        <Button type="primary" style={{width: "80%"}} onClick={() => takeApplication(record)}>
          Взяться за работу
        </Button>
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
