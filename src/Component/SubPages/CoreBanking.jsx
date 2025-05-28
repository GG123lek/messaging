import React from "react";
import PageHeader from "../PageHeader/PageHeader";

function CoreBanking() {
  return (
    <div>
      <PageHeader title="Core Banking">
        {/* Optional right-side content in header */}
        <button className="bg-[#2292FC] text-white px-4 py-1 rounded">
          Add New Account
        </button>
      </PageHeader>

      <div className="mt-6 px-6">
        {/* Page content */}
        <p>This is the core banking content...</p>
      </div>
    </div>
  );
}

export default CoreBanking;
