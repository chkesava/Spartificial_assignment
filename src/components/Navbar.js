// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#007bff' }}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/users">Users</Button>
        <Button color="inherit" component={Link} to="/posts">Posts</Button>
        <Button color='inherit' component={Link} to="/">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
