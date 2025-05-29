import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

import DashboardPage from './Component/Pages/DashboardPage';
import ClientSystem from './Component/Pages/ClientSystem';
import GateWayConfigurationPage from './Component/Pages/GateWayConfigurationPage';
import ReportPage from './Component/Pages/ReportPage';
import SettingsPage from './Component/Pages/SettingsPage';
import ActivityLogPage from './Component/Pages/ActivityLogPage';

// NEW sub-routes under Client Systems
import NewClientSystem from './Component/SubPages/NewClientSystem';
import CoreBanking from './Component/SubPages/CoreBanking';
import CMS from './Component/SubPages/Cms';
import ERP from './Component/SubPages/Erp';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="client-system" element={<ClientSystem />} />
        <Route path="new-client-system" element={<NewClientSystem />} />
        <Route path="core-banking" element={<CoreBanking />} />
        <Route path="cms" element={<CMS />} />
        <Route path="erp" element={<ERP />} />
        <Route path="gateway-configuration" element={<GateWayConfigurationPage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="activity-log" element={<ActivityLogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
