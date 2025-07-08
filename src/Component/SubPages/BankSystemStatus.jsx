import React from 'react';

const BankSystemStatus = ({ bankName }) => {
  const systems = [
    {
      name: 'Core Banking',
      mode: 'Blue mode',
      transaction: 'TRx',
      ipAddress: '196.46.20.46',
      status: 'Online',
      onlineTime: 'Active since 2hour ago'
    },
    {
      name: 'ERP',
      mode: 'Blue mode',
      transaction: 'TRx',
      ipAddress: '196.46.20.46',
      status: 'Offline',
      onlineTime: '2hours 30mins ago'
    },
    {
      name: 'CMS',
      mode: 'Blue mode',
      transaction: 'TRx',
      ipAddress: '196.46.20.46',
      status: 'Online',
      onlineTime: 'Active since 2hour ago'
    }
  ];

  return (
    <div className="px-4 sm:px-6 pt-3"> {/* Reduced top padding */}
      <div className="bg-white rounded-md w-full shadow-sm overflow-hidden">
        <div className="px-4 sm:px-6 pt-3 sm:pt-4 pb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{bankName}</h1>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-2 sm:py-3 pl-4 sm:pl-6 pr-2 sm:pr-4 text-xs sm:text-sm font-medium text-gray-700 uppercase">SYSTEM</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 uppercase">BLUE MODE</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 uppercase">IP ADDRESS</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 uppercase">STATUS</th>
                <th className="text-left py-2 sm:py-3 pr-4 sm:pr-6 pl-2 sm:pl-4 text-xs sm:text-sm font-medium text-gray-700 uppercase">ONLINE TIME</th>
              </tr>
            </thead>
            <tbody>
              {systems.map((system, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 sm:py-3 pl-4 sm:pl-6 pr-2 sm:pr-4 text-sm sm:text-base font-medium text-gray-900">{system.name}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-xs sm:text-sm text-gray-600">{system.mode}</span>
                      <span className="bg-blue-100 text-blue-800 text-xxs sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded">
                        {system.transaction}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">{system.ipAddress}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xxs sm:text-xs font-medium ${
                      system.status === 'Online' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1 sm:mr-2 ${
                        system.status === 'Online' ? 'bg-green-500' : 'bg-red-500'
                      }`}></span>
                      {system.status}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 pr-4 sm:pr-6 pl-2 sm:pl-4 text-xs sm:text-sm text-gray-600">{system.onlineTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-4 sm:h-5"></div>
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
    <div className="bg-gray-50 min-h-screen p-2 sm:p-0">
      <div className="space-y-2 sm:space-y-3"> {/* Reduced vertical spacing */}
        {banks.map((bank, index) => (
          <BankSystemStatus key={index} bankName={bank} />
        ))}
      </div>
    </div>
  );
}

export default AllBankSystems;