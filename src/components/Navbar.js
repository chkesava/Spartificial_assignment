// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button ,IconButton} from '@mui/material';
import { useTheme } from '../ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Navbar() {
  const { mode, toggleTheme } = useTheme();
  return (
    <AppBar position="static" style={{ backgroundColor: mode === 'light' ? '#2c3e50' : '#34495e' }}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/users">Users</Button>
        <Button color="inherit" component={Link} to="/posts">Posts</Button>
        <Button color='inherit' component={Link} to="/">Logout</Button>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={toggleTheme}
          style={{ marginLeft: 'auto' }}
        >
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>

    </AppBar>
  );
}

export default Navbar;
