import React from "react";
import { useState } from "react";

export default function ToggleTags() {
  const [activeTab, setActiveTab] = useState('SMS');

  return (
    <div className="inline-flex rounded-md border border-gray-200 overflow-hidden">
      <button
        className={`px-4 py-2 text-sm font-medium transition-colors ${
          activeTab === 'SMS'
            ? 'bg-white text-black'
            : 'bg-gray-100 text-gray-500 hover:text-black'
        }`}
        onClick={() => setActiveTab('SMS')}
      >
        SMS
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium transition-colors ${
          activeTab === 'Email'
            ? 'bg-white text-black'
            : 'bg-gray-100 text-gray-500 hover:text-black'
        }`}
        onClick={() => setActiveTab('Email')}
      >
        Email
      </button>
    </div>
  );
}
