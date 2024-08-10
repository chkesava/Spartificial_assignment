// src/pages/Home.js
import React from 'react';
import { Grid } from '@mui/material';
import KPICard from '../components/KPICard';
import Navbar from './components/Navbar';


function Home() {
  const totalUsers = JSON.parse(localStorage.getItem('users') || '[]').length;
  const totalPosts = JSON.parse(localStorage.getItem('posts') || '[]').length;
  const activeUsers = JSON.parse(localStorage.getItem('users') || '[]').filter(user => user.active).length;
  const recentPosts = JSON.parse(localStorage.getItem('posts') || '[]').filter(post => post.recent).length;

  return (
    <>
    <Navbar/>
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard title="Total Users" value={totalUsers} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard title="Total Posts" value={totalPosts} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard title="Users Active in the Last 24 Hours" value={activeUsers} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard title="Posts Published in the Last 24 Hours" value={recentPosts} />
      </Grid>
    </Grid>
    </>
  );
}

export default Home;
