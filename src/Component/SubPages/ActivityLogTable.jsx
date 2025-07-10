import React, { useState } from "react";
import calest from '../../assets/images/date.png';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import unitedlogo from '../../assets/images/uba.png';
import stanlogo from '../../assets/images/stanbic.png';
import firstlogo from '../../assets/images/firstbank.png';
import wemlogo from '../../assets/images/Wema.png';
import unilogo from '../../assets/images/unifiedpayment.png';
import filterIcon from '../../assets/images/butty.png';
import { ChevronLeft, ChevronRight } from "lucide-react";

const ActivityLogTable = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [range, setRange] = useState([
        {
            startDate: new Date("2023-01-06"),
            endDate: new Date("2023-01-12"),
            key: "selection",
        },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const totalEntries = 60;

    const bankLogos = {
        "United Bank for Africa": unitedlogo,
        "Stanbic IBTC Bank": stanlogo,
        "First Bank": firstlogo,
        "Wema Bank": wemlogo,
        "Unified Payment": unilogo,
    };

    const activityLogs = [
        {
            client: "United Bank for Africa",
            actionType: "Create",
            action: "New client system created with 2 SMPP gateways configured",
            object: 'Client System: "AcmeCorp"',
            date: "23/09/23, 09:11:04"
        },
        {
            client: "Stanbic IBTC Bank",
            actionType: "Edit",
            action: "Updated retry policy to 3 attempts",
            object: 'Gateway Config: "SMPP #1"',
            date: "23/09/23, 09:11:04"
        },
        {
            client: "First Bank",
            actionType: "Delete",
            action: "Access key deleted for inactive client",
            object: 'Gateway: "Twilio"',
            date: "23/09/23, 09:11:04"
        },
        {
            client: "Wema Bank",
            actionType: "View",
            action: "Admin viewed weekly usage report",
            object: 'Access Key: "Client123Key"',
            date: "23/09/23, 09:11:04"
        },
        {
            client: "Unified Payment",
            actionType: "Create",
            action: "New client system created with 2 SMPP gateways configured",
            object: "MsgID: #728391",
            date: "23/09/23, 09:11:04"
        },
        {
            client: "First Bank",
            actionType: "Create",
            action: "New client system created with 2 SMPP gateways configured",
            object: "MsgID: #728391",
            date: "23/09/23, 09:11:04"
        },
        {
            client: "Stanbic IBTC Bank",
            actionType: "Create",
            action: "New client system created with 2 SMPP gateways configured",
            object: "MsgID: #728391",
            date: "23/09/23, 09:11:04"
        },
        {
            client: "Unified Payment",
            actionType: "Create",
            action: "New client system created with 2 SMPP gateways configured",
            object: "MsgID: #728391",
            date: "23/09/23, 09:11:04"
        },
        {
            client: "United Bank for Africa",
            actionType: "Create",
            action: "New client system created with 2 SMPP gateways configured",
            object: "MsgID: #728391",
            date: "23/09/23, 09:11:04"
        },
        {
            client: "Wema Bank",
            actionType: "Create",
            action: "New client system created with 2 SMPP gateways configured",
            object: "MsgID: #728391",
            date: "23/09/23, 09:11:04"
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
            {/* Search and Filter Section */}
            <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white">
                <div className="relative w-full md:w-72">
                    <input
                        type="text"
                        placeholder="Search by users, action type etc."
                        className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                    <svg
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* Filter Button */}
                    <button className="flex items-center justify-center gap-2 bg-white text-[#344054] text-sm font-medium py-2 px-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                        <img src={filterIcon} alt="Filter" className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                    
                    {/* Date Range Picker */}
                    <div className="relative bg-white shadow rounded-lg border border-gray-300 px-4 inline-flex items-center h-10">
                        <button
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="flex items-center gap-2 text-sm text-black whitespace-nowrap text-[#101828] font-medium justify-center h-full w-full"
                        >
                            <span className="text-[#344054]">Showing:</span>
                            <img src={calest} alt="Calendar" className="w-4 h-4 text-gray-500" />
                            <span>
                                {format(range[0].startDate, "MMM d, yyyy")} –{" "}
                                {format(range[0].endDate, "MMM d, yyyy")}
                            </span>
                        </button>

                        {showCalendar && (
                            <div className="absolute z-20 right-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200">
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={range}
                                    rangeColors={["#4F46E5"]}
                                    className="rounded-md"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-[#FFF5F5]">
                            <th scope="col" className="px-6 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                                Client's Name
                            </th>
                            <th scope="col" className="px-6 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                                Action Type
                            </th>
                            <th scope="col" className="px-6 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                                Action Performed
                            </th>
                            <th scope="col" className="px-6 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                                Object Affected
                            </th>
                            <th scope="col" className="px-6 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {activityLogs.map((log, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img 
                                            src={bankLogos[log.client]} 
                                            alt={`${log.client} logo`} 
                                            className="w-7 h-7 mr-3 object-contain"
                                        />
                                        <span className="text-sm text-gray-900">{log.client}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <span className={`text-sm font-medium ${
                                        log.actionType === 'Create' ? 'text-green-600' :
                                        log.actionType === 'Edit' ? 'text-blue-600' :
                                        log.actionType === 'Delete' ? 'text-red-600' :
                                        log.actionType === 'View' ? 'text-purple-600' : 'text-gray-600'
                                    }`}>
                                        {log.actionType}
                                    </span>
                                </td>
                                <td className="px-6 py-2 text-sm text-gray-700">
                                    {log.action}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                                    {log.object}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {log.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 bg-white">
                <div className="text-sm text-gray-600 mb-2 sm:mb-0">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">60</span> entries
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Rows per page:</span>
                        <select 
                            className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(Number(e.target.value))}
                        >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button
                            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        >
                            <ChevronLeft className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="px-2 py-1 text-sm text-gray-700">{currentPage}</span>
                        <button
                            className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                            disabled={currentPage >= Math.ceil(totalEntries / rowsPerPage)}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                        >
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityLogTable;