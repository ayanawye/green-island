import { Button, Modal, Typography } from 'antd';

const { Text } = Typography;

const DetailsModal = ({ application, visible, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  
  return (
    <Modal
      visible={visible}
      onCancel={handleClose}
      footer={[
        <Button key="close" onClick={handleClose}>
          Закрыть
        </Button>
      ]}
    >
      <h2>Детали заявки</h2>
      <p>
        <strong>Комментарий:</strong>{' '}
        <Text ellipsis={{ tooltip: application.comment }}>
          {application.comment}
        </Text>
      </p>
      <p>
        <strong>Тип заявки:</strong> {application.type}
      </p>
      <p>
        <strong>Адрес клиента:</strong> {application.client_address}
      </p>
      <p>
        <strong>Позвонить:</strong>{' '}
        <a href={`tel:${application.client_phone}`}>
          {application.client_phone}
        </a>
      </p>
      <p>
        <strong>Статус:</strong> {application.status}
      </p>
    </Modal>
  );
};

export default DetailsModal;