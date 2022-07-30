import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router, Route, Routes} from "react-router-dom";

// PAGES
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
	</Router>
)
