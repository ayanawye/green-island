import { Table, Button } from 'antd';
import BrigadeModal from './BrigadeModal';
import { useState } from 'react';



const MyApplications = () => {
  const [dataSource, setDataSoutrse] = useState([
    { id: 1, date: '2023-05-30', type: 'Установить экобокс', address: 'ул. Примерная, 123'},
    { id: 2, date: '2023-05-30', type: 'Установить экобокс', address: 'ул. Примерная, 123'},
  ])
  const [modal, setModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleOpenModal = (record) => {
    setSelectedRecord(record)
    setModal(true);
  };
  
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
        <Button onClick={() => handleOpenModal(record)} type="primary">Назначить бригаду</Button>
      ),
    },
  ];
  return (
    <>
    <Table dataSource={dataSource} columns={columns} rowKey="id" />
    {setSelectedRecord && (
      <BrigadeModal open={modal} close={() => setModal(false)}/>
    )}
    </>
)
}

export default MyApplications;

