import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import mok from '../../assets/images/brach.png';

const BankClientsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg}', { eager: true });

  const getImage = (slug) => {
    const match = Object.entries(images).find(([path]) =>
      path.toLowerCase().includes(`${slug.toLowerCase()}.`)
    );
    return match ? match[1].default : null;
  };

  const clients = [
    { id: 1, name: "United Bank for Africa", slug: "uba", email: "help@ubaafrica.net", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 2, name: "First Bank", slug: "firstbank", email: "firstbank@gmail.com", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 3, name: "Wema Bank", slug: "wema", email: "wemabank@gmail.com", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 4, name: "Eco Bank", slug: "ecobank", email: "help@ecobank.net", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 6, name: "Union Bank", slug: "unionbank", email: "help@unionbank.net", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 7, name: "Stanbic IBTC Bank", slug: "stanbic", email: "help@ibtc.net", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 8, name: "Fidelity Bank", slug: "fidelity", email: "help@fidelitybank.net", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 9, name: "Standard Chartered", slug: "standard", email: "help@standardchartered.net", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" },
    { id: 10, name: "Guarantee Trust Bank", slug: "guaranty", email: "help@gtb.net", phone: "0-1988910892", dateAdded: "23/09/23, 09:11:04" }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const totalEntries = filteredClients.length;
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries);

  const currentClients = filteredClients.slice(startEntry - 1, endEntry);

  return (
    <div className="w-full max-w-full overflow-x-auto p-1">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white border-b border-gray-200 gap-3">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by users, action type etc."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-96 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap bg-white">
            <img src={mok} alt='' className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className=" min-w-full overflow-x-auto">
          <table
            className="min-w-full table-auto text-sm text-left"
            style={{ tableLayout: 'fixed' }}
          >
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-4 px-4 font-medium text-gray-500 text-sm w-1/4">Client Name</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500 text-sm w-1/4">Official Email</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500 text-sm w-1/6">Phone Number</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500 text-sm w-1/6">Date Added</th>
                <th className="text-left py-4 px-4 font-medium text-gray-500 text-sm w-1/6">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentClients.map((client) => (
                <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 bg-white">
                    <div className="flex items-center gap-3">
                      {getImage(client.slug) ? (
                        <img
                          src={getImage(client.slug)}
                          alt={client.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold">
                          N/A
                        </div>
                      )}
                      <span className="text-gray-900 text-sm">{client.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm bg-white break-words max-w-xs">{client.email}</td>
                  <td className="py-4 px-4 text-gray-600 text-sm bg-white whitespace-nowrap">{client.phone}</td>
                  <td className="py-4 px-4 text-gray-600 text-sm bg-white whitespace-nowrap">{client.dateAdded}</td>
                  <td className="py-4 px-4 bg-white">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
              {currentClients.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 px-4 text-center text-gray-500 text-sm bg-white">
                    No clients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 bg-white border-t border-gray-100 gap-3">
          <div className="text-gray-600 text-sm whitespace-nowrap">
            Showing {startEntry}-{endEntry} of {totalEntries} entries
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-gray-600 text-sm">Rows per page:</span>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <span className="px-3 py-1 text-sm text-gray-700">{currentPage}</span>
              <button
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                disabled={currentPage >= Math.ceil(totalEntries / rowsPerPage)}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankClientsTable;
