import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function AppHeader() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Box>
          <Button color='inherit' component={RouterLink} to='/'>
            Home
          </Button>

          <Button color='inherit' component={RouterLink} to='/about'>
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
