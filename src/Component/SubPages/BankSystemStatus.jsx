import React from 'react';

const BankSystemStatus = ({ bankName }) => {
  const systems = [
    {
      name: 'Core Banking',
      mode: 'Bind mode',
      transaction: 'TRx',
      ipAddress: '196.46.20.46',
      status: 'Online',
      onlineTime: 'Active since 2hour ago'
    },
    {
      name: 'ERP',
      mode: 'Bind mode',
      transaction: 'TRx',
      ipAddress: '196.46.20.46',
      status: 'Offline',
      onlineTime: '2hours 30mins ago'
    },
    {
      name: 'CMS',
      mode: 'Bind mode',
      transaction: 'TRx',
      ipAddress: '196.46.20.46',
      status: 'Online',
      onlineTime: 'Active since 2hour ago'
    }
  ];

  return (
    <div className="px-6 pt-6">
      <div className="bg-white rounded-md w-full shadow-sm overflow-hidden">
        <div className="px-6 pt-4 pb-1">
          <h1 className="text-2xl font-bold text-gray-900">{bankName}</h1>
        </div>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-3 pl-6 pr-4 text-sm font-medium text-gray-700 uppercase">SYSTEM</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 uppercase">BLIND MODE</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 uppercase">IP ADDRESS</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 uppercase">STATUS</th>
              <th className="text-left py-3 pr-6 pl-4 text-sm font-medium text-gray-700 uppercase">ONLINE TIME</th>
            </tr>
          </thead>
          <tbody>
            {systems.map((system, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 pl-6 pr-4 font-medium text-gray-900">{system.name}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">{system.mode}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                      {system.transaction}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600">{system.ipAddress}</td>
                <td className="py-3 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    system.status === 'Online' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      system.status === 'Online' ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    {system.status}
                  </span>
                </td>
                <td className="py-3 pr-6 pl-4 text-gray-600">{system.onlineTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-5"></div>
      </div>
    </div>
  );
};

function AllBankSystems() {
  const banks = [
    "United Bank for Africa",
    "Hope Bank", 
    "First Bank",
    "Union Bank",
    "Fidelity Bank"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {banks.map((bank, index) => (
        <BankSystemStatus key={index} bankName={bank} />
      ))}
    </div>
  );
}

export default AllBankSystems;