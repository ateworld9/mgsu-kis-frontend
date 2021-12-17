import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Paper } from '@mui/material';

import { VagonCard } from '../VagonCard';
import { BuyDialog } from '../BuyDialog';

const BuyPage = () => {
  const [dialog, setDialog] = useState(false);
  const [state, setState] = useState([]);
  const [selectedVagonId, setSelectedVagonId] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3001/api/vagons');
      setState(res.data.vagons);
    })();
  }, []);

  const handleClickOpen = (id) => {
    setSelectedVagonId(id);
    setDialog(true);
  };

  const handleClose = () => {
    setSelectedVagonId(0);
    setDialog(false);
  };

  return (
    <Container display="flex">
      <Paper sx={{ minHeight: '100%', padding: 4 }} elevation={12} square>
        <BuyDialog selectedVagonId={selectedVagonId} dialog={dialog} handleClose={handleClose} />
        {state.map((el) => (
          <VagonCard key={el.name} handleClickOpen={handleClickOpen} {...el} />
        ))}
      </Paper>
    </Container>
  );
};

export { BuyPage };
