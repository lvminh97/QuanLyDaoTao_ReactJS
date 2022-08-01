import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Login from './pages/login';
import LecturerHome from './pages/lecturer/home';
import LecturerClasslist from './pages/lecturer/classlist';
import LecturerClassDetail from './pages/lecturer/classdetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router basename=''>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        {/* Lecturer */}
        <Route path="/lecturer/" element={<LecturerHome />} />
        <Route path="/lecturer/classlist" element={<LecturerClasslist />} />
        <Route path="/lecturer/classdetail" element={<LecturerClassDetail />} />

      </Routes>
    </Router>
  </div>
)
