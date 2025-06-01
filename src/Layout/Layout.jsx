import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {/* Sidebar for desktop */}
      <div className="hidden sm:block w-[286px] bg-[#F0F0F0]">
        <Sidebar onLinkClick={() => {}} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-[#FBFBFB] min-w-0">
        {/* Mobile header with hamburger */}
        <div className="sm:hidden flex items-center bg-white p-3 shadow-md">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            className="text-2xl text-gray-700"
          >
            <HiMenu />
          </button>
          <div className="ml-4 font-bold text-lg text-gray-800">
            Messaging Platform
          </div>
        </div>

        {/* Main content with padding and scroll */}
        <main className="flex-1 overflow-auto min-h-[1350px]">
          <Outlet />
        </main>
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 sm:hidden flex">
          <div className="w-[286px] bg-[#F0F0F0] h-full shadow-lg overflow-auto">
            <Sidebar onLinkClick={() => setSidebarOpen(false)} />
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}

export default Layout;
