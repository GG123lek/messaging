import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Fixed Sidebar for desktop */}
      <div className="hidden sm:block fixed left-0 top-0 w-[286px] h-screen bg-[#F0F0F0] z-10 overflow-y-auto">
        <Sidebar onLinkClick={() => {}} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-[#FBFBFB] min-w-0 sm:ml-[286px]">
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

        {/* Main content - now scrolls naturally with browser scroll */}
        <main className="flex-1 w-full">
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