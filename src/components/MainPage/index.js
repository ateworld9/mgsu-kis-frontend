import { Box } from '@mui/system';
import { Avatar, Card, CardMedia, Container, Paper, Typography } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import { orange } from '@mui/material/colors';
const MainPage = () => {
  return (
    <Container>
      <Paper sx={{ minHeight: '100%', padding: 4 }} elevation={12} square>
        <Typography component="div" variant="h4" textAlign="center" mb={4}>
          О компании
        </Typography>
        <Typography component="div" variant="body2" mb={2}>
          Компания «Гамма» — лидер российского рынка по производству и продаже бытовок, блок контейнеров и каркасных
          конструкций. Имея за плечами 5 лет успешной работы, «Гамма» обладает уникальными знаниями и опытом на рынке по
          производству и продаже бытовок, блок контейнеров и каркасных конструкций. В штате нашей компании работают
          профессионалы самого высокого класса.
        </Typography>
        <Typography component="div" variant="body2" mb={2}>
          «Гамма» — клиентоориентированная компания и надежный партнер, гибко реагирующий на изменения рыночной
          ситуации, привносящий не только западные методики в свою бизнес-практику но и создающий и внедряющий
          собственные разработки актуальные для Российского рынка. За годы своей работы компания
        </Typography>
        <Typography component="div" variant="body2" mb={2}>
          «Гамма» разработала новые образцы бытовок, блок контейнеров и каркасных конструкций, которые полностью
          отвечают запросам клиентов. Компания «Гамма» также осуществляет логистические услуги .
        </Typography>

        <Typography component="div" variant="h4" textAlign="center" mb={4}>
          Наш Офис
        </Typography>
        <Box display="flex" justifyContent="space-around" mb={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="300" image="/img/ofis1.png" alt="green iguana" />
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="300" image="/img/ofis2.jpeg" alt="green iguana" />
          </Card>
        </Box>

        <Typography component="div" variant="h4" textAlign="center" mb={4}>
          НАШИ ПРЕИМУЩЕСТВА
        </Typography>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: orange[900], mx: 1 }}>
              <FolderIcon />
            </Avatar>
            Любые планировки
          </Box>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: orange[900], mx: 1 }}>
              <FolderIcon />
            </Avatar>
            Собственное производство
          </Box>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: orange[900], mx: 1 }}>
              <FolderIcon />
            </Avatar>
            Консультация на всех стадиях
          </Box>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: orange[900], mx: 1 }}>
              <FolderIcon />
            </Avatar>
            Сборка на участке
          </Box>
        </Box>

        <Typography component="div" variant="h4" textAlign="center" mb={4}>
          КАК МЫ РАБОТАЕМ
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <img src="/img/how-work/5.png" alt="1" />
            <Typography component="div">Оставьте заявку или позвоните</Typography>
          </Box>
          <Box>
            <img src="/img/how-work/6.png" alt="2" />
            <Typography component="div">Выбирайте бытовки</Typography>
          </Box>
          <Box>
            <img src="/img/how-work/7.png" alt="3" />
            <Typography component="div">Подписываем договор</Typography>
          </Box>
          <Box>
            <img src="/img/how-work/8.png" alt="4" />
            <Typography component="div">Всего один день и строение у вас!</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export { MainPage };
