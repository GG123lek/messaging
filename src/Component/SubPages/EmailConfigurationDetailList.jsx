import React, { useState } from 'react';

const EmailConfigurationDetailList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const [configurations, setConfigurations] = useState([
    { id: 1, name: 'Email Configuration 1', type: 'Primary Configuration', isPrimary: true },
    { id: 2, name: 'Email Configuration 2', type: 'Fall Back 1', isPrimary: false },
    { id: 3, name: 'Email Configuration 3', type: 'Fall Back 2', isPrimary: false },
    { id: 4, name: 'Email Configuration 4', type: 'Fall Back 3', isPrimary: false }
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
    
    newConfigurations.splice(draggedIndex, 1);
    newConfigurations.splice(dropIndex, 0, draggedItem);
    
    newConfigurations.forEach((config, index) => {
      config.isPrimary = index === 0;
      config.type = index === 0 ? 'Primary Configuration' : `Fall Back ${index}`;
    });
    
    setConfigurations(newConfigurations);
    setDraggedIndex(null);
    
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
    if (e.target.closest('.arrow-icon')) {
      if (expandedIndex === index) {
        setExpandedIndex(null);
      } else {
        setExpandedIndex(index);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setExpandedIndex(null);
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

  const EmailSuccessIcon = () => (
    <svg 
      className="w-16 h-16 text-green-500" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="w-full px-6">
      {showModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[400px] text-center shadow-lg">
            <div className="mb-6 mx-auto w-[120px] h-[120px] bg-green-100 rounded-full flex items-center justify-center">
              <EmailSuccessIcon />
            </div>
            <h2 className="text-2xl font-bold mb-2">Email Configuration Updated!</h2>
            <p className="text-gray-700 mb-8">
              Your email configuration has been successfully saved and updated.
            </p>
            <button
              onClick={handleCloseModal}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="border border-gray-300 rounded-lg p-6 bg-white">
        <div className="space-y-4">
          {configurations.map((config, index) => (
            <div key={config.id} className="space-y-0">
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
                  <span className="text-[16px] font-semibold text-gray-700">{config.name}</span>
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

              {expandedIndex === index && (
                <div className="mt-2 border border-gray-300 rounded-md p-0">
                  <EmailConfigurationForm 
                    configName={config.name}
                    onSave={() => setShowModal(true)}
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

const EmailConfigurationForm = ({ configName, onSave }) => {
  const [formData, setFormData] = useState({
    smtpHost: 'smtp.example.com',
    smtpPort: '587',
    username: 'your_email@example.com',
    password: 'your_app_password',
    fromEmail: 'noreply@example.com'
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
    onSave();
  };

  const formFields = [
    { 
      name: 'smtpHost', 
      label: 'SMTP Host', 
      type: 'text', 
      placeholder: 'e.g. smtp.gmail.com',
      width: 'w-96'
    },
    { 
      name: 'smtpPort', 
      label: 'SMTP Port', 
      type: 'text', 
      placeholder: 'e.g. 587',
      width: 'w-96'
    },
    { 
      name: 'username', 
      label: 'Username', 
      type: 'email', 
      placeholder: 'your_email@example.com',
      width: 'w-96'
    },
    { 
      name: 'password', 
      label: 'Password', 
      type: 'password', 
      placeholder: 'your_app_password',
      width: 'w-96'
    },
    { 
      name: 'fromEmail', 
      label: 'From Email', 
      type: 'email', 
      placeholder: 'noreply@example.com',
      width: 'w-96'
    }
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="mb-4 p-4">
        <h2 className="text-lg font-semibold text-gray-800">Edit {configName}</h2>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[16px] font-normal"
              />
            </div>
          </div>
        ))}

        <div className="flex justify-end space-x-3 pt-6 mt-6">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfigurationDetailList;