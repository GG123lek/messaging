import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import goops from '../../assets/images/activity.png';
import bellss from "../../assets/images/bell rang.png";
import avaso from '../../assets/images/picet.png';
import chevs from '../../assets/images/down.png';
import plus from '../../assets/images/whiteadd.png'
import BankClientsTable from '../ClientTable/BankClientTable';

function ClientPage() {
  return (
    <div>
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={goops} alt="Client Icon" className="w-4 h-4" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">Clients</span>
          </div>
        }
      >
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 cursor-pointer">
            <img
              src={bellss}
              alt="Notifications"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img
              src={avaso}
              alt="Albert Afolabi"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight">
              Albert Afolabi
            </h3>
            <p className="text-xs text-gray-500">System Admin</p>
          </div>

          <div>
            <img
              src={chevs}
              alt="Dropdown"
              className="w-4 h-4 text-gray-400"
            />
          </div>
        </div>
      </PageHeader>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-[#101828] mb-1">Clients</h1>
            <p className="text-sm text-[#667085]">This page allows you to manage all clients</p>
          </div>

          <button className="flex items-center gap-2 bg-[#2292FC] text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm hover:bg-[#1b7ed1] transition">
            <img src={plus} alt="Add" className="w-4 h-4" />
            New Customer
          </button>
        </div>

        <div className="w-full overflow-x-auto">
         <BankClientsTable />
       </div>
      </main>
    </div>
  );
}

export default ClientPage;
