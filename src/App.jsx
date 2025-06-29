import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

import DashboardPage from './Component/Pages/DashboardPage';
import ClientSystem from './Component/Pages/ClientSystem';
import GateWayConfigurationPage from './Component/Pages/GateWayConfigurationPage';
import ReportPage from './Component/Pages/ReportPage';
import SettingsPage from './Component/Pages/SettingsPage';
import ActivityLogPage from './Component/Pages/ActivityLogPage';
import ClientPage from './Component/Pages/ClientPage';
import ClientDetailsPage from './Component/Pages/ClientDetailsPage';
import EditCoreBankingPage from './Component/Pages/EditCoreBankingPage';
import CustomerForm from './Component/Pages/CustomerForm';

// Client System sub-routes
import NewClientSystem from './Component/SubPages/NewClientSystem';
import CoreBanking from './Component/SubPages/CoreBanking';
import CMS from './Component/SubPages/Cms';
import ERP from './Component/SubPages/Erp';

// Gateway sub-routes
import Email from './Component/SubPages/Email';
import Sms from './Component/SubPages/Sms';
import Ussd from './Component/SubPages/Ussd';
import Watsapp from './Component/SubPages/Watsapp';

// ✅ New pages
import SystemDashboardOne from './Component/Pages/SystemDashboardOne';
import NewSystemForm from './Component/Pages/NewSystemForm'; // NEW PAGE

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Dashboard home page */}
        <Route index element={<DashboardPage />} />

        {/* Client section with nested routes */}
        <Route path="client-page" element={<ClientPage />}>
          <Route path="customer-form" element={<CustomerForm />} />
          <Route path="details/:slug" element={<ClientDetailsPage />} />
          <Route path="details/:slug/editcorebanking" element={<EditCoreBankingPage />} />
        </Route>

        {/* Client system + new dashboard page + new system form */}
        <Route path="client-system">
          <Route index element={<ClientSystem />} />
          <Route path="system-dashboard-one" element={<SystemDashboardOne />} />
        </Route>

        {/* 🔹 New empty form route */}
        <Route path="/client-page/details/:slug/new-system" element={<NewSystemForm />} />

        {/* Additional routes */}
        <Route path="new-client-system" element={<NewClientSystem />} />

        <Route path="report" element={<ReportPage />}>
          <Route path="core-banking" element={<CoreBanking />} />
          <Route path="cms" element={<CMS />} />
          <Route path="erp" element={<ERP />} />
        </Route>

        <Route path="gateway-configuration" element={<GateWayConfigurationPage />} />
        <Route path="gateway-configuration/sms" element={<Sms />} />
        <Route path="gateway-configuration/email" element={<Email />} />
        {/* <Route path="gateway-configuration/ussd" element={<Ussd />} />
        <Route path="gateway-configuration/whatsapp" element={<Watsapp />} /> */}

        <Route path="settings" element={<SettingsPage />} />
        <Route path="activity-log" element={<ActivityLogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
