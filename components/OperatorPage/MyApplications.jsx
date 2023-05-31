import { Table, Button } from 'antd';

const dataSource = [
  {
    id: 1,
    date: '2023-05-30',
    type: 'Установ экобокс',
    address: 'ул. Примерная, 123',
  },
];

const columns = [
  {
    title: 'Номер',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Тип заявки',
    dataIndex: 'requestType',
    key: 'requestType',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Действие',
    key: 'action',
    render: (text, record) => (
      <Button type="primary">Назначить бригаду</Button>
    ),
  },
];

const MyApplications = () => {
  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
};

export default MyApplications;

