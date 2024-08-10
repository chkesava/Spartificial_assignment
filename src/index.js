// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialUsers, initialPosts } from './services/data';

localStorage.setItem('users', JSON.stringify(initialUsers));
localStorage.setItem('posts', JSON.stringify(initialPosts));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
