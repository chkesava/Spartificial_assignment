// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import UserListing from './pages/UserListing';
import PostListing from './pages/PostListing';
import LoginPage from './pages/LoginPage';

import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={<UserListing />} />
        <Route path="/posts" element={<PostListing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
