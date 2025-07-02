import { useState } from "react";
import React from "react";
import mast from '../../assets/images/mask.png'

export default function ConfigureChannel() {
  const [toggles, setToggles] = useState({
    sms: false,
    email: false,
    ussd: false,
  });

  const [showModal, setShowModal] = useState(false);

  const handleToggle = (type) => {
    setToggles((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const ToggleSwitch = ({ isEnabled, onToggle, label }) => (
    <div className="flex items-center gap-3">
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isEnabled ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
            isEnabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <span className="text-gray-900 font-medium text-lg">{label}</span>
    </div>
  );

  return (
    <>
      <div className="space-y-4">
        {/* Header & Description */}
        <div>
          <h2 className="text-xl font-bold text-black">Configure Channel</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage and configure channel notice
          </p>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-300" />

        {/* Archive Section */}
        <div className="flex items-start gap-8">
          <div>
            <h3 className="text-black font-semibold mb-1">
              Archive Before Deletion
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Saves log to archive before purge
            </p>
          </div>

          {/* Toggles */}
          <div className="space-y-3 max-w-md">
            <ToggleSwitch
              isEnabled={toggles.sms}
              onToggle={() => handleToggle("sms")}
              label="SMS"
            />
            <ToggleSwitch
              isEnabled={toggles.email}
              onToggle={() => handleToggle("email")}
              label="Email"
            />
            <ToggleSwitch
              isEnabled={toggles.ussd}
              onToggle={() => handleToggle("ussd")}
              label="USSD"
            />
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-300" />

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <img
             src={mast}
             alt="Success"
             className="mb-6 mx-auto w-[120px] h-auto"
             />
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              Changes Saved Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Your configuration has been updated.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
