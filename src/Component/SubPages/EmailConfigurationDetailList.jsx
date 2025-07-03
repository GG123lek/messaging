import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailConfigurationDetailList = () => {
  const [configurations] = useState([
    { id: 1, name: 'Email Configuration 1', type: 'Primary Configuration', isPrimary: true },
    { id: 2, name: 'Email Configuration 2', type: 'Fall Back 1', isPrimary: false },
    { id: 3, name: 'Email Configuration 3', type: 'Fall Back 2', isPrimary: false },
    { id: 4, name: 'Email Configuration 4', type: 'Fall Back 3', isPrimary: false }
  ]);

  const navigate = useNavigate();

  return (
    <div className="px-6"> {/* Small top margin and side padding */}
      {configurations.map(config => (
        <div key={config.id} className="mb-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{config.name}</h3>
              <p className="text-sm text-gray-600">{config.type}</p>
            </div>
            {config.isPrimary && (
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                Primary
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailConfigurationDetailList;