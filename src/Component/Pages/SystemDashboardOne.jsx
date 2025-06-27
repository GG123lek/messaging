import React, { useState } from 'react';
import { Plus, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import SmppFormPopup from '../Pages/SmppFormPopup';

const SystemDashboardOne = () => {
  const systems = [
    {
      title: 'UBA Core Banking',
      apiKey: 'WYH767822920280098',
      action: 'Configure SMPP',
      actionType: 'configure',
      isConfigured: false,
    },
    {
      title: 'UBA ERP',
      apiKey: 'WYH767822920280098',
      action: 'Edit SMPP',
      actionType: 'edit',
      isConfigured: true,
    },
    {
      title: 'UBA CMS',
      apiKey: 'WYH767822920280098',
      action: 'Edit SMPP',
      actionType: 'none',
      isConfigured: true,
    },
  ];

  const [showSmppForm, setShowSmppForm] = useState(false);
  const [formMode, setFormMode] = useState('configure'); // or 'edit'
  const [formTitle, setFormTitle] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAction = (system) => {
    if (system.actionType === 'none') return;

    setFormMode(system.actionType);

    if (system.actionType === 'configure') {
      setFormTitle('New SMPP');
      setSuccessMessage('You have successfully added a new SMPP');
    } else if (system.actionType === 'edit') {
      setFormTitle('Edit UBA core banking SMPP');
      setSuccessMessage('You have successfully edited UBA core banking SMPP');
    }

    setShowSmppForm(true);
  };

  const closePopup = () => {
    setShowSmppForm(false);
  };

  const navigate = useNavigate();
  const { slug } = useParams();

  const handleNewSystemClick = () => {
    navigate(`/client-page/details/${slug}/new-system`, {
      state: { fromTab: 'System' },
    });
  };

  return (
    <div className="h-full flex flex-col p-4">
      {/* Header */}
      <div className="flex justify-end items-center mb-6">
        <button
          onClick={handleNewSystemClick}
          className="flex items-center gap-2 px-4 py-2 bg-white border cursor-pointer border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New system
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {systems.map((system, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow text-center w-full"
            style={{ minHeight: '220px' }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{system.title}</h2>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-6">API Key : {system.apiKey}</p>
              <div className="border-b border-gray-200"></div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => handleAction(system)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer font-medium transition-colors ${
                  system.isConfigured
                    ? 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
                    : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {system.isConfigured ? (
                  <>
                    {system.action}
                    <ExternalLink className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    {system.action}
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal */}
      {showSmppForm && (
        <SmppFormPopup
          onClose={closePopup}
          mode={formMode}
          title={formTitle}
          successMessage={successMessage}
        />
      )}
    </div>
  );
};

export default SystemDashboardOne;
