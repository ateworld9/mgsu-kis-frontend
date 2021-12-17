import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const OrderCard = ({ Vagons, id, name, surname, tel, state, updateOrder }) => {
  const { type, width, length, height } = Vagons;

  const handleInWork = async () => {
    const res = await axios.patch('http://localhost:3001/api/order', { id });
    const Id = res.data.order.id;
    updateOrder(Id, 'В обработке');
  };
  const handleArchive = async () => {
    const res = await axios.put('http://localhost:3001/api/order', { id });
    const Id = res.data.order.id;
    updateOrder(Id, 'В архиве');
  };
  const handleDelete = async () => {
    const res = await axios.delete('http://localhost:3001/api/order', { id });
    const Id = res.data.order.id;
    updateOrder(Id, 'Удален');
  };

  return (
    <Card elevation={6} sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography>ID: {id}</Typography>
        <Typography variant="h5" component="div">
          {name} {surname}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {tel}
        </Typography>
        <Typography variant="h5" component="div">
          Название: {Vagons?.name} Тип: {type}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Д{length} Ш{width} В{height}
        </Typography>
        <Typography variant="subtitle2" component="div">
          Состояние заявки: {state}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleInWork} size="small">
          В обработке
        </Button>
        <Button onClick={handleArchive} size="small">
          В архив
        </Button>
        <Button onClick={handleDelete} size="small">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

export { OrderCard };
