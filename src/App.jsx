import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

// Existing Pages
import DashboardPage from './Component/Pages/DashboardPage';
import GateWayConfigurationPage from './Component/Pages/GateWayConfigurationPage';
import ReportsPage from './Component/Pages/ReportsPage';
import SettingsPage from './Component/Pages/SettingsPage';
import ActivityLogPage from './Component/Pages/ActivityLogPage';
import ClientPage from './Component/Pages/ClientPage';
import ClientDetailsPage from './Component/Pages/ClientDetailsPage';
import EditCoreBankingPage from './Component/Pages/EditCoreBankingPage';
import CustomerForm from './Component/Pages/CustomerForm';

// Authentication Pages
import LoginPage from '../src/Auth/LoginPage';
import ForgotPassword from '../src/Auth/ForgotPassword';
import ResetPasswordInitial from '../src/Auth/ResetPasswordInitial';
import PasswordResetEmail from '../src/Auth/PasswordResetEmail';
import EmailVerification from '../src/Auth/EmailVerification';
import CreatePassword from '../src/Auth/CreatePassword';
import PasswordSetup from '../src/Auth/PasswordSetup';
import PasswordSuccess from '../src/Auth/PasswordSuccess';

// Gateway sub-routes
import Email from './Component/SubPages/Email';
import Sms from './Component/SubPages/Sms';

// New pages
import SystemDashboardOne from './Component/Pages/SystemDashboardOne';
import NewSystemForm from './Component/Pages/NewSystemForm';

// Configuration Forms
import SmsConfigData from './Component/SubPages/SmsConfigData';
import EmailConfigData from './Component/SubPages/EmailConfigData';

// SMPP System Monitor Page
import SmppSystemMonitor from './Component/Pages/SmppSystemMonitor';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes (outside layout) */}
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPasswordInitial />} />
        <Route path="/password-reset-email" element={<PasswordResetEmail />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/password-setup" element={<PasswordSetup />} />
        <Route path="/password-success" element={<PasswordSuccess />} />

        {/* Protected Routes (inside layout) */}
        <Route path="/" element={<Layout />}>
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

          {/* System Dashboard */}
          <Route path="system-dashboard-one" element={<SystemDashboardOne />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;