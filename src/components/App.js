import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { AboutPage } from './AboutPage';
import { MainPage } from './MainPage';
import { BuyPage } from './BuyPage';
import { AdminPage } from './AdminPage';

function App() {
  return (
    <Router>
      <Box
        style={{
          backgroundColor: '#CCCC99',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <Typography variant="h6" component="div">
                  ISTAS 4-3
                </Typography>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/about">
                <Button sx={{ ml: 2, my: 2, color: 'white', display: 'block' }}>О Компании</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/buy">
                <Button sx={{ ml: 2, my: 2, color: 'white', display: 'block' }}>Заказать</Button>
              </Link>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
