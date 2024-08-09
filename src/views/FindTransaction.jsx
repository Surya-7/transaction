import React, { useState } from 'react';
import axios from 'axios'; // or import axiosInstance from './axiosInstance';


const FindTransaction = () => {
  const orders = [
    { orderId: 1, date: '2024-08-01', country: 'USA', currency: 'USD', amount: 120.50 },
    { orderId: 2, date: '2024-08-02', country: 'CAN', currency: 'CAD', amount: 85.75 },
    { orderId: 3, date: '2024-08-03', country: 'GBR', currency: 'GBP', amount: 95.00 },
    { orderId: 4, date: '2024-08-04', country: 'AUS', currency: 'AUD', amount: 150.20 },
    { orderId: 5, date: '2024-08-05', country: 'JPN', currency: 'JPY', amount: 12345.67 },
    { orderId: 6, date: '2024-08-06', country: 'IND', currency: 'INR', amount: 5678.90 },
    { orderId: 7, date: '2024-08-07', country: 'USA', currency: 'USD', amount: 110.30 },
    { orderId: 8, date: '2024-08-08', country: 'CAN', currency: 'CAD', amount: 75.60 },
    { orderId: 9, date: '2024-08-09', country: 'GBR', currency: 'GBP', amount: 200.00 },
    { orderId: 10, date: '2024-08-10', country: 'AUS', currency: 'AUD', amount: 9000.00 },
    { orderId: 11, date: '2024-08-11', country: 'JPN', currency: 'JPY', amount: 800.50 },
    { orderId: 12, date: '2024-08-12', country: 'IND', currency: 'INR', amount: 123000.45 },
    { orderId: 13, date: '2024-08-13', country: 'USA', currency: 'USD', amount: 60.75 },
    { orderId: 14, date: '2024-08-14', country: 'CAN', currency: 'CAD', amount: 450.20 },
    { orderId: 15, date: '2024-08-15', country: 'GBR', currency: 'GBP', amount: 300.15 },
    { orderId: 16, date: '2024-08-16', country: 'AUS', currency: 'AUD', amount: 95.40 },
    { orderId: 17, date: '2024-08-17', country: 'JPN', currency: 'JPY', amount: 700.30 },
    { orderId: 18, date: '2024-08-18', country: 'IND', currency: 'INR', amount: 9100.80 },
    { orderId: 19, date: '2024-08-19', country: 'USA', currency: 'USD', amount: 50.60 },
    { orderId: 20, date: '2024-08-20', country: 'CAN', currency: 'CAD', amount: 100.90 },
  ];

  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchBy, setSearchBy] = useState('orderId');
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage] = useState('');


// Define state and other necessary hooks here
// ...

const handleSearch = async () => {
  try {
    let results;
    if (searchBy === 'orderId') {
      const order = await axios.get(`http://localhost:9191/orders/${searchValue}`);
      results = order.data ? [order.data] : []; 
    } else {
      const response = await axios.get(`http://localhost:9191/orders?country=${searchValue}`);
      results = response.data; 
    }
    setFilteredOrders(results);
    setMessage(results.length === 0 ? 'No orders found' : '');
  } catch (error) {
    console.error('Error fetching orders:', error);
    setMessage('Error fetching orders');
  }
};


  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mt-10">
        <div className="mb-6">
          <p className="text-xl font-semibold mb-4 text-gray-800">Search By:</p>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchBy}
            onChange={e => setSearchBy(e.target.value)}
          >
            <option value="orderId">Order ID</option>
            <option value="country">Country</option>
          </select>
          {searchBy === 'orderId' ? (
            <input
              type="number"
              placeholder="Enter order ID"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          ) : (
            <select
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="CAN">CAN</option>
              <option value="GBR">GBR</option>
              <option value="AUS">AUS</option>
              <option value="JPN">JPN</option>
              <option value="IND">IND</option>
            </select>
          )}
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {message && (
        <div className="mt-4 text-red-500 font-semibold">
          {message}
        </div>
      )}
      {filteredOrders.length > 0 && (
        <div className="mt-10 w-full max-w-4xl">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Order ID</th>
                <th className="py-2 px-4 bg-gray-200">Date</th>
                <th className="py-2 px-4 bg-gray-200">Country</th>
                <th className="py-2 px-4 bg-gray-200">Currency</th>
                <th className="py-2 px-4 bg-gray-200">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.orderId}>
                  <td className="border-t py-2 px-4">{order.orderId}</td>
                  <td className="border-t py-2 px-4">{order.date}</td>
                  <td className="border-t py-2 px-4">{order.country}</td>
                  <td className="border-t py-2 px-4">{order.currency}</td>
                  <td className="border-t py-2 px-4">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FindTransaction;
