// src/components/KPICard.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

function KPICard({ title, value }) {
  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center',backgroundColor: '#ffffff'  }}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
}

export default KPICard;
