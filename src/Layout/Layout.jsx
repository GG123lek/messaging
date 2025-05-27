import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isDashboard = location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {/* Sidebar for desktop */}
      <div className="hidden sm:block w-[286px] bg-[#F0F0F0]">
        <Sidebar onLinkClick={() => {}} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-[#EBDFFC]">
        {/* Top bar for mobile */}
        <div className="sm:hidden px-4 py-3 bg-white shadow-md flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-800"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  sidebarOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Dashboard header - full width, aligned with sidebar content */}
        {isDashboard && (
          <div
            className="bg-white shadow-sm"
            style={{ paddingLeft: 24, paddingRight: 24, height: 60, display: "flex", alignItems: "center" }}
          >
            <h1 className="text-xl font-semibold text-[#2292FC]">Dashboard</h1>
          </div>
        )}

        {/* Page content - padding separate from header */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 sm:hidden flex">
          <div className="w-[286px] bg-[#F0F0F0] h-full shadow-lg">
            <Sidebar onLinkClick={() => setSidebarOpen(false)} />
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Layout;
