import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';

import PageHeader from '../PageHeader/PageHeader';
import goop from '../../assets/images/fine.png';
import bells from '../../assets/images/bell rang.png';
import avas from '../../assets/images/picet.png';
import chevrons from '../../assets/images/down.png';
import backArrowBlue from '../../assets/images/leftin.png'; // ✅ Make sure this exists

const NewSystemForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromTab = location.state?.fromTab || 'Reports';

  const handleGoBack = () => {
    navigate(`/client-page/details/uba`, {
      state: { fromTab: 'System' }, // 👈 Preserve tab on return
    });
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
          Edit Hayzhed Global
        </h1>
      </div>
    </div>
  );
};

export default NewSystemForm;
