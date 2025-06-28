import React, { useState } from 'react';
import { ChevronDown, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EmailSMSDashboard() {
  const [filters, setFilters] = useState({
    gateway: 'Any',
    clients: 'Any',
    senderId: 'Any',
    recipientEmail: 'Any',
    status: 'Any'
  });
  const [messageFilter, setMessageFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const emailData = [
    {
      date: '23/09/23, 09:11:04',
      clients: 'UBA',
      senderId: 'uba@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Weekly Newsletter',
      status: 'Success',
      message: 'Welcome'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'Stanbic',
      senderId: 'stanbic@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Confirm your Email',
      status: 'Failed',
      message: 'Security'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'Access',
      senderId: 'access@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Reset your Password',
      status: 'Pending',
      message: 'Newsletter'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'UP Digital',
      senderId: 'upgital@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Weekly Newsletter',
      status: 'Delivered',
      message: 'Welcome'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'Fidelity',
      senderId: 'fidelity@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Confirm your Email',
      status: 'Success',
      message: 'Security'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'UBA',
      senderId: 'uba@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Transaction Alert',
      status: 'Success',
      message: 'Transfer Completed'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'Stanbic',
      senderId: 'stanbic@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Account Update',
      status: 'Failed',
      message: 'Update Required'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'Access',
      senderId: 'access@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'New Feature Release',
      status: 'Pending',
      message: 'Check it out'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'UP Digital',
      senderId: 'upgital@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Welcome Bonus',
      status: 'Delivered',
      message: 'Claim Now'
    },
    {
      date: '23/09/23, 09:11:04',
      clients: 'Fidelity',
      senderId: 'fidelity@gmail.com',
      recipientEmail: 'ayomideopeyemi85@gmail.com',
      subject: 'Service Notice',
      status: 'Success',
      message: 'Scheduled Downtime'
    }
  ];
  

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success': return 'text-green-600';
      case 'Failed': return 'text-red-600';
      case 'Pending': return 'text-yellow-600';
      case 'Delivered': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const SelectDropdown = ({ value, onChange, options, placeholder }) => (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8 h-10"
      >
        <option value="Any">{placeholder || 'Any'}</option>
        {options?.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );

  return (
    <div className="w-full">
      {/* Filter Section */}
      <div className="p-4">
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-700 mb-1">Gateway</label>
            <div className="relative w-full">
              <input
                type="text"
                value={filters.gateway}
                onChange={(e) => setFilters({ ...filters, gateway: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8 h-10"
                placeholder="Any"
              />
              <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-700 mb-1">Clients</label>
            <SelectDropdown
              value={filters.clients}
              onChange={(value) => setFilters({ ...filters, clients: value })}
              placeholder="Any"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-700 mb-1">Sender ID</label>
            <SelectDropdown
              value={filters.senderId}
              onChange={(value) => setFilters({ ...filters, senderId: value })}
              placeholder="Any"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-700 mb-1">Recipient Email</label>
            <SelectDropdown
              value={filters.recipientEmail}
              onChange={(value) => setFilters({ ...filters, recipientEmail: value })}
              placeholder="Any"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-sm font-medium text-gray-700 mb-1">Status</label>
            <SelectDropdown
              value={filters.status}
              onChange={(value) => setFilters({ ...filters, status: value })}
              options={['Success', 'Failed', 'Pending', 'Delivered']}
              placeholder="Any"
            />
          </div>
        </div>

        {/* Message textarea */}
        <div className="mb-6 flex flex-col items-start">
          <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            value={messageFilter}
            onChange={(e) => setMessageFilter(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows="4"
            placeholder="Enter phrase text to match"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6 mx-4"></div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Date', 'Clients', 'Sender ID', 'Recipient Email', 'Subject', 'Status', 'Message'].map(header => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {emailData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.clients}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.senderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.recipientEmail}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.subject}</td>
                <td className= "px-6 py-4 whitespace-nowrap text-sm text-gray-600" >{row.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-700">Showing 1-10 of 60 entries</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-gray-700 px-2">{currentPage}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-1 rounded hover:bg-gray-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
