import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Login from './pages/login';
import HomeLecturer from './pages/home-lecturer';
import ClasslistLecturer from './pages/classlist-lecturer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename=''>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/home-lecturer" element={<HomeLecturer />} />
      <Route path="/classlist-lecturer" element={<ClasslistLecturer />} />
    </Routes>
	</Router>
)
