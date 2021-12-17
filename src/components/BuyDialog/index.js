import { useState } from 'react';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

const BuyDialog = ({ selectedVagonId, dialog, handleClose }) => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    tel: '',
  });

  const handleChange = (event) => {
    const target = event.target;
    setForm((prev) => ({ ...prev, [target.id]: target.value }));
  };

  const handleBuy = async () => {
    await axios.post('http://localhost:3001/api/order', { vagon_id: selectedVagonId, ...form });
    handleClose();
  };

  return (
    <Dialog open={dialog} onClose={handleClose}>
      <DialogTitle>Заказать вагончик</DialogTitle>
      <Box p={2}>
        <Box p={1}>
          <TextField onChange={handleChange} id="name" label="Name" variant="standard" value={form.name} />
        </Box>
        <Box p={1}>
          <TextField onChange={handleChange} id="surname" label="Surname" variant="standard" value={form.surname} />
        </Box>
        <Box p={1} mb={2}>
          <TextField onChange={handleChange} id="tel" label="Tel" variant="standard" value={form.tel} />
        </Box>
        <Button onClick={handleBuy} size="small">
          Купить
        </Button>
      </Box>
    </Dialog>
  );
};

export { BuyDialog };
