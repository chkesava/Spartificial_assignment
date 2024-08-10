// src/components/KPICard.js
import React from 'react';
import { Paper, Typography, useTheme } from '@mui/material';

function KPICard({ title, value }) {
  const theme = useTheme();

  return (
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h5" color="textPrimary">{title}</Typography>
      <Typography variant="h4" color="textSecondary">{value}</Typography>
    </Paper>
  );
}

export default KPICard;
