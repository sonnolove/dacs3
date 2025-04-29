// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Thay 'Switch' bằng 'Routes'
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashBoardPage';
import UserManagementPage from './pages/UserManagementPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        {/* Thay 'Switch' thành 'Routes' */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />  {/* Thay 'component' thành 'element' */}
          <Route path="/users" element={<UserManagementPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
