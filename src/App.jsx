import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MySessions from './components/MySessions';
import PublishedSessions from './components/PublishedSessions';
import EditSession from './components/EditSession';
import CreateSession from './components/CreateSession';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Logout from './components/Logout';
import About from './components/About';

function AppContent() {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  // Hide navbar on login/register pages
  const hideNavbarRoutes = ['/', '/login', '/register'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  // Show footer on dashboard/public pages
  const showFooter = !['/', '/login', '/register'].includes(location.pathname);

  return (
    <>
    
      {/* <Logo/> */}
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}
      <Routes>
        {/* Redirect "/" to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Public pages */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/published-sessions" element={<PublishedSessions />} />
        <Route path="/dashboard/my-sessions" element={<MySessions /> } />
        <Route path="/dashboard/create-session" element={<CreateSession />} />

        {/* Protected dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
         {/* <Route path="/dashboard/my-sessions" element={isLoggedIn ? <MySessions /> : <Navigate to="/login" />} /> */}
        {/* <Route path="/dashboard/create-session" element={isLoggedIn ? <CreateSession /> : <Navigate to="/login" />} /> */}
        <Route path="/dashboard/edit-session/:id" element={isLoggedIn ? <EditSession /> : <Navigate to="/login" />} />

        {/* Logout */}
        <Route path="/logout" element={<Logout />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>

      {showFooter && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
