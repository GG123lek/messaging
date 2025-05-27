import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import ClientSystem from './Component/Pages/ClientSystem';
import ReportPage from './Component/Pages/ReportPage';
import SettingsPage from './Component/Pages/SettingsPage';
import ActivityLogPage from './Component/Pages/ActivityLogPage';
import DashboardPage from './Component/Pages/DashboardPage';
import GateWayConfigurationPage from './Component/Pages/GateWayConfigurationPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="client-system" element={<ClientSystem />} />
        <Route path="gateway-configuration" element={<GateWayConfigurationPage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="activity-log" element={<ActivityLogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
