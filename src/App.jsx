import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import ChatPage from './Component/Pages/ChatPage';
import ProfilePage from './Component/Pages/ProfilePage';
import SettingsPage from './Component/Pages/SettingsPage';
import LoginPage from './Component/Pages/LoginPage';
import RegisterPage from './Component/Pages/RegisterPage';
import DashboardPage from './Component/Pages/DashboardPage'; 
import React from 'react';

function App() {
  return (
    <Routes>
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} /> 
        <Route path="chat" element={<ChatPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
