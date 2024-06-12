import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Ensure you import your CSS file here

function AudienceForm() {
  const [name, setName] = useState('');
  const [rules, setRules] = useState([{ field: 'totalSpends', operator: '>', value: 10000 }]);
  const [logic, setLogic] = useState('AND');
  const [audienceSize, setAudienceSize] = useState(null);

  const handleAddRule = () => {
    setRules([...rules, { field: '', operator: '', value: '' }]);
  };

  const handleRuleChange = (index, key, value) => {
    const newRules = [...rules];
    newRules[index][key] = value;
    setRules(newRules);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/audience', { name, rules, logic });
      console.log(response.data);
    } catch (error) {
      console.error('Error creating audience:', error);
    }
  };

  const handleCheckAudienceSize = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/audience/check-size', { rules, logic });
      setAudienceSize(response.data.size);
    } catch (error) {
      console.error('Error checking audience size:', error);
    }
  };

  return (
    <div className="App bg-black h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <div className="container h-auto w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm overflow-hidden">
        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-2xl text-center mb-4 text-green-400">Create Audience</h1>
          <form className="max-w-md mx-auto flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
            <div className="w-full mb-4">
              <label className="text-white">Audience Name:</label>
              <input
                type="text"
                className="input-text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {rules.map((rule, index) => (
              <div key={index} className="w-full flex justify-between items-center mb-4">
                <select
                  className="select-text"
                  value={rule.field}
                  onChange={(e) => handleRuleChange(index, 'field', e.target.value)}
                >
                  <option value="totalSpends">Total Spends</option>
                  <option value="maxVisits">Max Number of Visits</option>
                  <option value="lastVisit">Last Visit</option>
                </select>
                <select
                  className="select-text"
                  value={rule.operator}
                  onChange={(e) => handleRuleChange(index, 'operator', e.target.value)}
                >
                  <option value=">">{">"}</option>
                  <option value="<">{"<"}</option>
                  <option value="=">=</option>
                  <option value="!=">!=</option>
                </select>
                <input
                  type="text"
                  className="input-text"
                  value={rule.value}
                  onChange={(e) => handleRuleChange(index, 'value', e.target.value)}
                />
              </div>
            ))}
            <button
              type="button"
              className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mb-4"
              onClick={handleAddRule}
            >
              Add Rule
            </button>
            <div className="w-full mb-4">
              <label className="text-white">Logic:</label>
              <select className="select-text" value={logic} onChange={(e) => setLogic(e.target.value)}>
                <option value="AND">AND</option>
                <option value="OR">OR</option>
              </select>
            </div>
            <button
              type="button"
              className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mb-4"
              onClick={handleCheckAudienceSize}
            >
              Check Audience Size
            </button>
            {audienceSize !== null && <div className="text-white mb-4">Audience Size: {audienceSize}</div>}
            <button
              type="submit"
              className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mb-4"
            >
              Create Audience
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AudienceForm;
