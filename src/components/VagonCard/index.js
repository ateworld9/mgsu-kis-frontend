import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

const VagonCard = ({ id, name, type, price, length, width, height, imgPath, handleClickOpen }) => {
  return (
    <Card elevation={6} sx={{ minWidth: 275, margin: 2 }}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              Тип помещения: {type}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Размеры: {length}Х{width}Х{height}
              <br />
              Длинна Х Ширина Х Высота
            </Typography>
            <Typography variant="h5" component="div">
              Цена: {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleClickOpen(id)} size="small">
              Заказать
            </Button>
          </CardActions>
        </Box>
        <Box p={2} maxHeight="400px" maxWidth="500px">
          <img src={imgPath} alt={type} style={{ height: '400px', width: '500px' }} />
        </Box>
      </Box>
    </Card>
  );
};

export { VagonCard };
