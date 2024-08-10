// src/pages/PostListing.js
import React, { useEffect, useState } from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TablePagination } from '@mui/material';
import KPICard from '../components/KPICard';
import Navbar from '../components/Navbar';


function PostListing() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleHide = (postId) => {
    const updatedPosts = posts.map(post => post.postId === postId ? { ...post, hidden: true } : post);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter(post => post.postId !== postId);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const totalPosts = posts.length;
  const recentPosts = posts.filter(post => post.recent).length;

  return (
    <>
    <Navbar />
    <Grid container spacing={3} padding={3} style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <Grid item xs={12} sm={6}>
        <KPICard title="Total Posts" value={totalPosts} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <KPICard title="Posts Published in the Last 24 Hours" value={recentPosts} />
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ maxHeight: '60vh', overflow: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Post ID</TableCell>
                <TableCell>Caption</TableCell>
                <TableCell>Media URL</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(post => (
                <TableRow key={post.postId}>
                  <TableCell>{post.postId}</TableCell>
                  <TableCell>{post.caption}</TableCell>
                  <TableCell>{post.mediaUrl}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" style={{ marginRight: '8px' }} onClick={() => handleHide(post.postId)}>Hide</Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(post.postId)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={totalPosts}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>
    </Grid>
    </>
  );
}

export default PostListing;
