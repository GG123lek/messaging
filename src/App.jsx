import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

import DashboardPage from './Component/Pages/DashboardPage';
import GateWayConfigurationPage from './Component/Pages/GateWayConfigurationPage';
import ReportsPage from './Component/Pages/ReportsPage';
import SettingsPage from './Component/Pages/SettingsPage';
import ActivityLogPage from './Component/Pages/ActivityLogPage';
import ClientPage from './Component/Pages/ClientPage';
import ClientDetailsPage from './Component/Pages/ClientDetailsPage';
import EditCoreBankingPage from './Component/Pages/EditCoreBankingPage';
import CustomerForm from './Component/Pages/CustomerForm';

// Gateway sub-routes
import Email from './Component/SubPages/Email';
import Sms from './Component/SubPages/Sms';

// ✅ New pages
import SystemDashboardOne from './Component/Pages/SystemDashboardOne';
import NewSystemForm from './Component/Pages/NewSystemForm';

// ✅ Configuration Forms
import SmsConfigData from './Component/SubPages/SmsConfigData';
import EmailConfigData from './Component/SubPages/EmailConfigData';

// ✅ SMPP System Monitor Page (you'll need to create this)
import SmppSystemMonitor from './Component/Pages/SmppSystemMonitor';

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
          <Route path="details/:slug/new-system" element={<NewSystemForm />} />
        </Route>

        {/* Gateway Configuration */}
        <Route path="gateway-configuration" element={<GateWayConfigurationPage />} />

        {/* SMS route with nested routing */}
        <Route path="gateway-configuration/sms" element={<Sms />}>
          <Route path="sms-config-data" element={<SmsConfigData />} />
        </Route>

        {/* Email route with nested routing */}
        <Route path="gateway-configuration/email" element={<Email />}>
          <Route path="email-config-data" element={<EmailConfigData />} />
        </Route>

        {/* Reports */}
        <Route path="reports" element={<ReportsPage />} />

        {/* SMPP System Monitor */}
        <Route path="smpp-system-monitor" element={<SmppSystemMonitor />} />


        {/* Settings */}
        <Route path="settings" element={<SettingsPage />} />

        {/* Activity Log */}
        <Route path="activity-log" element={<ActivityLogPage />} />

        {/* System Dashboard - keeping this if still needed */}
        <Route path="system-dashboard-one" element={<SystemDashboardOne />} />
      </Route>
    </Routes>
  );
}

export default App;