import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import goop from '../../assets/images/fine.png';
import bells from '../../assets/images/bell rang.png';
import avas from '../../assets/images/picet.png';
import chevrons from '../../assets/images/down.png';
import backArrowBlue from '../../assets/images/leftin.png';
import maskit from '../../assets/images/maskfive.png'

// Modal Component - with transparent background so you can see behind
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {title && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ×
            </button>
          )}
        </div>
        <div className="mb-6">
          {children}
        </div>
        {title && (
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const NewSystemForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromTab = location.state?.fromTab || 'Reports';

  const handleGoBack = () => {
    navigate(`/client-page/details/uba`, {
      state: { fromTab: 'System' }, // 👈 Preserve tab on return
    });
  };

  const [smppName, setSMPPName] = useState("SMS Configuration 1");
  const [description, setDescription] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCancel = () => {
    setSMPPName("SMS Configuration 1");
    setDescription("");
  };

  const handleAddNew = () => {
    console.log("SMPP Name:", smppName);
    console.log("Description:", description);
    setShowSuccessModal(true);
  };

  return (
    <div className="h-full flex flex-col ">
      <PageHeader
        title={
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
            <img src={goop} alt="Home Icon" className="w-4 h-4" />
            <span className="text-gray-400">/</span>
            <span className="text-[#2292FC]">Dashboard</span>
          </div>
        }
      >
        <div className="flex items-center">
          <div className="w-6 h-6 cursor-pointer">
            <img src={bells} alt="Notifications" className="w-full h-full object-contain" />
          </div>
          <div className="h-10 border-l border-gray-300 mx-4"></div>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img src={avas} alt="Albert Afolabi" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-1 ml-4">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight">Albert Afolabi</h3>
            <p className="text-xs text-gray-500">System Admin</p>
          </div>
          <div className="ml-4">
            <img src={chevrons} alt="Dropdown" className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </PageHeader>

      {/* ✅ Content Below Header */}
      <div className="p-6">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-[#2292FC] text-sm font-medium mb-1 cursor-pointer"
        >
          <img src={backArrowBlue} alt="Go Back" className="w-4 h-4" />
          Go Back
        </button>

        <h1 className="text-2xl font-semibold text-[#101828]">
          Add New System
        </h1>
        <div className='bg-white shadow rounded-lg border-none p-6 mt-2 h-[795px] relative'>
          <div className="mb-8">
            <h1 className="text-xl font-medium text-gray-900 mb-1">New System</h1>
            <p className="text-gray-500 text-base">Configure SMPP Profile</p>
          </div>
          
          <div className="border-t border-gray-300 w-full mb-8" />
          
          <div className="grid grid-cols-4 gap-6 items-center mb-8">
            <label htmlFor="smpp-name" className="text-gray-700 font-medium">
              SMPP Name
            </label>
            <div className="col-span-3">
              <input
                id="smpp-name"
                type="text"
                value={smppName}
                onChange={(e) => setSMPPName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className='border-t border-gray-300 w-full mb-8'></div>
          
          <div className="grid grid-cols-4 gap-6 items-start mb-8">
            <label htmlFor="description" className="text-gray-700 font-medium pt-3">
              Description
            </label>
            <div className="col-span-3">
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter Description"
              />
            </div>
          </div>
          
          <div className='border-t border-gray-300 w-full mb-8'></div>
          
          <div className="flex justify-end space-x-4 absolute  left-6 right-6">
            <button
              onClick={handleCancel}
              className="px-6 py-2.5 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleAddNew}
              className="px-6 py-2.5 text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 
              focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Add New
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title=""
      >
        <div className="text-center space-y-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
              <img src={maskit} alt=''/>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Successful !!</h3>
            <p className="text-gray-500 text-sm">
              You have successfully change<br />
              configuration to this system
            </p>
          </div>
          
          <div className="pt-4">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewSystemForm;