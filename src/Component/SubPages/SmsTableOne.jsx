import React from 'react';
import nigeriaFlag from '../../assets/images/mycant.png'; // Make sure you have a small NG flag image

const SmsTableOne = () => {
  const tableData = [
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Text',
      sender: 'Telco',
      client: 'Waarith265',
      gateway: 'ESMP',
      channel: 'API',
      operator: 'MTN',
      smsCount: 1,
      dlrStatus: 'Success',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Unicode',
      sender: 'UBA',
      client: 'Onodore165',
      gateway: 'Twillio',
      channel: 'SMPP',
      operator: 'Glo',
      smsCount: 2,
      dlrStatus: 'Failed',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Text',
      sender: 'Telco',
      client: 'Walexy095',
      gateway: 'ESMP',
      channel: 'SMPP',
      operator: '9Mobile',
      smsCount: 1,
      dlrStatus: 'Expired',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Text',
      sender: 'Cash Token',
      client: 'Duchess876',
      gateway: 'Twillio',
      channel: 'API',
      operator: 'MTN',
      smsCount: 4,
      dlrStatus: 'Delivered',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Text',
      sender: 'Telco',
      client: 'Peter265',
      gateway: 'ESMP',
      channel: 'SMPP',
      operator: 'Glo',
      smsCount: 8,
      dlrStatus: 'Success',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Unicode',
      sender: 'Telco',
      client: 'Temitope165',
      gateway: 'Twillio',
      channel: 'API',
      operator: '9Mobile',
      smsCount: 1,
      dlrStatus: 'Expired',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Unicode',
      sender: 'Cash Token',
      client: 'Roseline872',
      gateway: 'ESMP',
      channel: 'SMPP',
      operator: 'Glo',
      smsCount: 2,
      dlrStatus: 'Failed',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Text',
      sender: 'UBA',
      client: 'Jesuloba100',
      gateway: 'ESMP',
      channel: 'API',
      operator: '9Mobile',
      smsCount: 5,
      dlrStatus: 'Success',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Unicode',
      sender: 'Cash Token',
      client: 'Daniel402',
      gateway: 'Twillio',
      channel: 'SMPP',
      operator: 'MTN',
      smsCount: 3,
      dlrStatus: 'Delivered',
      dlrTime: '1970-01-01 01:00:00',
    },
    {
      date: '23/09/23, 09:11:04',
      mobile: '07423341098',
      type: 'Unicode',
      sender: 'Telko',
      client: 'Waarith265',
      gateway: 'ESMP',
      channel: 'API',
      operator: '9Mobile',
      smsCount: 2,
      dlrStatus: 'Expired',
      dlrTime: '1970-01-01 01:00:00',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success': return 'text-green-600';
      case 'Failed': return 'text-red-600';
      case 'Pending': return 'text-yellow-600';
      case 'Delivered': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="w-full">
      <table className="w-full text-xs text-left text-gray-700 border-separate border-spacing-y-2">
        <thead className="bg-gray-100 text-gray-500 uppercase">
          <tr>
            <th className="px-2 py-3">Date</th>
            <th className="px-2 py-3">Mobile</th>
            <th className="px-2 py-3">Type</th>
            <th className="px-2 py-3">Sender</th>
            <th className="px-2 py-3">Clients</th>
            <th className="px-2 py-3">Gateway</th>
            <th className="px-2 py-3">Channel</th>
            <th className="px-2 py-3">Country</th>
            <th className="px-2 py-3">Operator</th>
            <th className="px-2 py-3">No of SMS</th>
            <th className="px-2 py-3">DLR Status</th>
            <th className="px-2 py-3">DLR Time</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {tableData.map((row, index) => (
            <tr key={index} className="bg-white shadow-sm rounded">
              <td className="px-2 py-4 whitespace-nowrap">{row.date}</td>
              <td className="px-2 py-4">{row.mobile}</td>
              <td className="px-2 py-4">{row.type}</td>
              <td className="px-2 py-4">{row.sender}</td>
              <td className="px-2 py-4">{row.client}</td>
              <td className="px-2 py-4">{row.gateway}</td>
              <td className="px-2 py-4">{row.channel}</td>
              <td className="px-2 py-4">
                <div className="flex items-center gap-2">
                  <img
                    src={nigeriaFlag}
                    alt="Nigeria Flag"
                    className="w-5 h-4 object-cover"
                  />
                  <span className="text-[#667085]">NGN</span>
                </div>
              </td>
              <td className="px-2 py-4">{row.operator}</td>
              <td className="px-2 py-4 text-center">{row.smsCount}</td>
              <td className={`px-2 py-4 font-semibold ${getStatusColor(row.dlrStatus)}`}>
                {row.dlrStatus}
              </td>
              <td className="px-2 py-4">{row.dlrTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-6 px-4 text-sm text-gray-600">
        <div className="text-[#687182]">Showing 1–10 of 60 entries</div>
        <div className="flex items-center gap-2">
          <label htmlFor="rowsPerPage" className="text-[#687182]">Rows per page:</label>
          <select id="rowsPerPage" className="border rounded px-2 py-1">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="60">60</option>
          </select>
          <button className="px-2 py-1 border rounded text-gray-500" disabled>{'<'}</button>
          <span className="px-2">1</span>
          <button className="px-2 py-1 border rounded">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default SmsTableOne;
