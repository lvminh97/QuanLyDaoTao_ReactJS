import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Login from './pages/login';
import LecturerHome from './pages/lecturer/home';
import LecturerClasslist from './pages/lecturer/classlist';
import LecturerClassDetail from './pages/lecturer/classdetail';
import StudentClassDetail from './pages/student/classdetail';
import LecturerInfo from './pages/lecturer/info';
import StudentClasslist from './pages/student/classlist';

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
        <Route path="/lecturer/info" element={<LecturerInfo />} />
        {/* Student */}
        {/* <Route path="/student/" element={<LecturerHome />} /> */}
        <Route path="/student/classlist" element={<StudentClasslist />} />
        <Route path="/student/classdetail" element={<StudentClassDetail />} />
      </Routes>
    </Router>
  </div>
)
