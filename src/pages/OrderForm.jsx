import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Ensure you import your CSS file here

const OrderForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Failed to fetch customers', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/order', {
        customerId,
        product,
        amount,
      });
      setMessage('Order data submitted successfully');
      setCustomerId('');
      setProduct('');
      setAmount('');
    } catch (error) {
      setMessage('Failed to submit order data');
    }
  };

  return (
    <div className="App bg-black h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm overflow-hidden">
        <div className="mt-4 grow flex items-center justify-around">
          <div className="mb-48">
            <h1 className="text-2xl text-center mb-4">Order Form</h1>
            <form className="max-w-md mx-auto h-full flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
              <div className="w-full">
                <label className="text-white">Customer: </label>
                <select
                  className='select-text'
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                  required
                >
                  <option value="">Select a customer</option>
                  {customers.map((customer) => (
                    <option key={customer._id} value={customer._id}>
                      {customer.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="text-white">Product: </label>
                <input
                  type="text"
                  className='input-text'
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-white">Amount: </label>
                <input
                  type="number"
                  className='input-text'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <button className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mt-2">Submit</button>
            </form>
            {message && <p className="text-red-500 mt-2">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
