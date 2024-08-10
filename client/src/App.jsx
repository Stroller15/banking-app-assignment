import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CustomerDashboard from './components/Dashboard/CustomerDashboard';
import BankerDashboard from './components/Dashboard/BankerDashboard';
import PrivateRoute from './components/Layout/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      setIsLoggedIn(true);
      setUserRole(user.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <Router>
      <CssBaseline />
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              isLoggedIn
                ? (userRole === 'BANKER' ? <BankerDashboard /> : <CustomerDashboard />)
                : <Navigate to="/login" />
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
