// src/pages/UserListing.js
import React, { useEffect, useState } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TablePagination } from '@mui/material';
import KPICard from '../components/KPICard';

function UserListing() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleEdit = (userId) => {
    // Implement edit functionality
  };

  const handleBan = (userId) => {
    const updatedUsers = users.filter(user => user.userId !== userId);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.active).length;

  return (
    <Grid container spacing={3} padding={3} style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <Grid item xs={12} sm={6}>
        <KPICard title="Total Users" value={totalUsers} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <KPICard title="Users Active in the Last 24 Hours" value={activeUsers} />
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ maxHeight: '60vh', overflow: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => (
                <TableRow key={user.userId}>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" style={{ marginRight: '8px' }} onClick={() => handleEdit(user.userId)}>Edit</Button>
                    <Button variant="contained" color="secondary" onClick={() => handleBan(user.userId)}>Ban</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={totalUsers}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default UserListing;
