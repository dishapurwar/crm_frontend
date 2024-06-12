import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Ensure you import your CSS file here

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/campaigns');
        console.log('Response data:', response.data); // Log the response data
        setCampaigns(response.data);
      } catch (error) {
        console.error('Failed to fetch campaigns', error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="h-screen bg-black text-white">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl text-center mb-4 text-green-400">Campaigns</h2>
        <ul className="text-center">
          {campaigns.map((campaign) => (
            <li key={campaign._id} className="mb-4">
              <h3>{campaign.name}</h3>
              <p>Created At: {new Date(campaign.createdAt).toLocaleString()}</p>
              <p>Audience Size: {campaign.audienceSize || 'Calculating...'}</p>
              <p>Sent: {campaign.sentCount || 'Calculating...'}</p>
              <p>Failed: {campaign.failedCount || 'Calculating...'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignList;
