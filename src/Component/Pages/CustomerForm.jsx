import React from 'react';

function CustomerForm() {
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Customer</h2>
      {/* Add your form fields here */}
      <form>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Customer Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Customer Email"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-[#2292FC] text-white px-4 py-2 rounded hover:bg-[#1b7ed1]"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
