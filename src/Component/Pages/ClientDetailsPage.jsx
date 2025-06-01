import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ClientDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const clientMap = {
    uba: 'UNITED BANK FOR AFRICA',
    firstbank: 'FIRST BANK',
    wema: 'WEMA BANK',
    ecobank: 'ECO BANK',
    unionbank: 'UNION BANK',
    stanbic: 'STANBIC IBTC BANK',
    fidelity: 'FIDELITY BANK',
    standard: 'STANDARD CHARTERED',
    guaranty: 'GUARANTEE TRUST BANK',
  };

  const clientName = clientMap[slug];

  return (
    <div className="max-w-7xl mx-auto">
      <button
        onClick={() => navigate('/client-page')}
        className="flex items-center text-[#2292FC] hover:text-[#1b7ed1] text-sm font-medium mb-2"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </button>

      <h1 className="text-2xl font-semibold text-[#101828] mb-1">
        {clientName || 'Client Not Found'}
      </h1>
      

      {/* Add more content sections here */}
    </div>
  );
};

export default ClientDetailPage;
