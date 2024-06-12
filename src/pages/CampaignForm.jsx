import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Ensure you import your CSS file here

const CampaignForm = () => {
  const [name, setName] = useState('');
  const [criteria, setCriteria] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/campaign', { name, criteria });
      console.log('Campaign created successfully');
      setName('');
      setCriteria('');
    } catch (error) {
      console.error('Failed to create campaign', error);
    }
  };

  return (
    <div className="App bg-black h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <div className="container h-auto w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm overflow-hidden">
        <div className="mt-4 flex flex-col items-center">
          <h2 className="text-2xl text-center mb-4 text-green-400">Create Campaign</h2>
          <form className="max-w-md mx-auto flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
            <div className="w-full mb-4">
              <label className="text-white">Name:</label>
              <input
                type="text"
                className="input-text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-full mb-4">
              <label className="text-white">Criteria:</label>
              <input
                type="text"
                className="input-text"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mb-4">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignForm;
