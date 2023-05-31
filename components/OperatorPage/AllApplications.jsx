import { Table } from 'antd';
import { useState } from 'react';
import MyBtn from '../ui/button/MyBtn';

const AllApplications = () => {
  const [applications, setApplication] = useState([
    {id: 1, date: "10-02-2023", type: "Вывусти мусор", address: "Rekbr, 2/4"},
    {id: 2, date: "22-02-2023", type: "Демонтировать экобокс", address: "Роа, 2/4"},
    {id: 3, date: "9-02-2023", type: "Установить экобокс", address: "Киевкая, 44"},
    {id: 4, date: "9-02-2023", type: "Установить экобокс", address: "Киевкая, 44"},
  ])

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      render: (_, record, index) => index + 1,
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Тип заявки',
      dataIndex: 'type',
      key: 'type',
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
        <MyBtn type="primary">Взяться за работу</MyBtn>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={applications} columns={columns} rowKey="id" />;
    </div>
  );
};

export default AllApplications;