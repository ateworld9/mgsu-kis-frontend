import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Paper } from '@mui/material';
import { OrderCard } from '../OrderCard';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3001/api/orders');
      setOrders(res.data.orders);
      console.log(res.data.orders);
    })();
  }, []);

  const updateOrder = (id, status) => {
    // setOrders((prev) =>
    //   prev.map((el) => {
    //     if (el.id === id) {
    //       return { ...el, status };
    //     }
    //     return el;
    //   })
    // );
  };

  return (
    <Container>
      <Paper sx={{ minHeight: '100%', padding: 4 }} elevation={12} square>
        {orders?.length >= 1 && orders?.map((el) => <OrderCard key={el.id} updateOrder={updateOrder} {...el} />)}
      </Paper>
    </Container>
  );
};

export { AdminPage };
