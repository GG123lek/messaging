import React, { useState } from 'react';

const SmsConfigurationList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  
  // Initial configurations array
  const [configurations, setConfigurations] = useState([
    { id: 1, name: 'SMS Configuration 1', type: 'Primary Configuration', isPrimary: true },
    { id: 2, name: 'SMS Configuration 2', type: 'Fall Back 1', isPrimary: false },
    { id: 3, name: 'SMS Configuration 3', type: 'Fall Back 2', isPrimary: false },
    { id: 4, name: 'SMS Configuration 4', type: 'Fall Back 3', isPrimary: false }
  ]);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newConfigurations = [...configurations];
    const draggedItem = newConfigurations[draggedIndex];
    
    // Remove the dragged item
    newConfigurations.splice(draggedIndex, 1);
    
    // Insert at new position
    newConfigurations.splice(dropIndex, 0, draggedItem);
    
    // Update primary configuration (first one is always primary)
    newConfigurations.forEach((config, index) => {
      config.isPrimary = index === 0;
      config.type = index === 0 ? 'Primary Configuration' : `Fall Back ${index}`;
    });
    
    setConfigurations(newConfigurations);
    setDraggedIndex(null);
    
    // If expanded item was moved, update expanded index
    if (expandedIndex === draggedIndex) {
      setExpandedIndex(dropIndex);
    } else if (expandedIndex !== null) {
      if (draggedIndex < expandedIndex && dropIndex >= expandedIndex) {
        setExpandedIndex(expandedIndex - 1);
      } else if (draggedIndex > expandedIndex && dropIndex <= expandedIndex) {
        setExpandedIndex(expandedIndex + 1);
      }
    }
  };

  const toggleExpand = (index, e) => {
    // Check if the click was on the arrow icon
    if (e.target.closest('.arrow-icon')) {
      if (expandedIndex === index) {
        setExpandedIndex(null);
      } else {
        setExpandedIndex(index);
      }
    }
  };

  const DragIcon = () => (
    <svg 
      className="w-4 h-4 text-gray-400 cursor-grab active:cursor-grabbing" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
    </svg>
  );

  return (
    <div className="w-full px-6">
      <div className="border border-gray-300 rounded-lg p-6 bg-white">
        <div className="space-y-4">
          {configurations.map((config, index) => (
            <div key={config.id} className="space-y-0">
              {/* Configuration Item */}
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                onClick={(e) => toggleExpand(index, e)}
                className={`h-11 bg-white border border-gray-300 rounded-md flex justify-between items-center px-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 ${
                  draggedIndex === index ? 'opacity-50 scale-105' : ''
                } ${config.isPrimary ? 'border-blue-200' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <DragIcon />
                  <span className="text-sm text-gray-700">{config.name}</span>
                  {config.isPrimary && (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      Primary
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{config.type}</span>
                  <svg 
                    className={`arrow-icon w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expanded Form (only for clicked item) */}
              {expandedIndex === index && (
                <div className="mt-2 border border-gray-300 rounded-md p-0">
                  <SmsConfigurationForm 
                    configName={config.name}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SmsConfigurationForm = ({ configName }) => {
  const [formData, setFormData] = useState({
    smppName: configName || 'SMS Configuration 1',
    providerName: 'Walsey Global',
    smppHost: '123yhwsyashsytf',
    smppPort: '20',
    smppUsername: '30',
    smppPassword: '',
    txSessions: '30',
    rxSessions: '30',
    trxSessions: '30',
    systemType: '',
    serviceType: '',
    enquireLinkInterval: '30',
    reconnectDelay: '10',
    sourceAddrTON: '0',
    sourceAddrNPI: '1',
    destAddrTON: '0',
    destAddrNPI: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const formFields = [
    { name: 'smppName', label: 'SMPP Name', type: 'text', width: 'w-96' },
    { name: 'providerName', label: 'Provider Name', type: 'text', width: 'w-96' },
    { name: 'smppHost', label: 'SMPP Host', type: 'text', width: 'w-150' },
    { name: 'smppPort', label: 'SMPP Port', type: 'text', width: 'w-96' },
    { name: 'smppUsername', label: 'SMPP User Name', type: 'text', width: 'w-96' },
    { name: 'smppPassword', label: 'SMPP Password', type: 'password', width: 'w-96' },
    { name: 'txSessions', label: 'TX Sessions', type: 'text', width: 'w-96' },
    { name: 'rxSessions', label: 'RX Sessions', type: 'text', width: 'w-96' },
    { name: 'trxSessions', label: 'TRx Sessions', type: 'text', width: 'w-96' },
    { name: 'systemType', label: 'System Type', type: 'text', width: 'w-96', placeholder: 'Enter system type specified by vendor' },
    { name: 'serviceType', label: 'Service Type', type: 'text', width: 'w-96', placeholder: 'Enter service type specified by vendor' },
    { name: 'enquireLinkInterval', label: 'Enquire Link Interval', type: 'text', width: 'w-96' },
    { name: 'reconnectDelay', label: 'Reconnect Delay', type: 'text', width: 'w-96' },
    { name: 'sourceAddrTON', label: 'Source ADDR TON', type: 'text', width: 'w-96' },
    { name: 'sourceAddrNPI', label: 'Source ADDR NPI', type: 'text', width: 'w-96' },
    { name: 'destAddrTON', label: 'Dest ADDR TON', type: 'text', width: 'w-96' },
    { name: 'destAddrNPI', label: 'Dest ADDR NPI', type: 'text', width: 'w-96' }
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="mb-4 p-4">
        <h2 className="text-lg font-normal  text-gray-800">Edit {configName}</h2>
      </div>
      
      <div className="p-4 space-y-4 ml-6">
        {formFields.map((field) => (
          <div key={field.name} className="flex items-center border-b border-gray-200 pb-4">
            <label className="w-48 text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <div className={field.width}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
        ))}

         <div className="flex justify-end space-x-3 pt-6 mt-6 "> 
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmsConfigurationList;