import { Table, Button, Typography } from "antd";
import { useEffect, useState } from "react";
// import s from '../../components/OperatorPage/OperatorPage.module.scss';
import s from '../User.module.scss';
import { myApplications } from "@/requests/Applications";
import { useSelector } from "react-redux";

const { Text } = Typography;

const UserDone = () => {
  const {myApplications} = useSelector(state => state.myApplications)
  const [filterData, setDataFilter] = useState([])

  useEffect(()=>{
    const newData = myApplications.filter( (item ) => {
     return item.finished_by_client === true
    })
    console.log(newData);
    setDataFilter(newData)
  }, [myApplications])

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

export default UserDone;