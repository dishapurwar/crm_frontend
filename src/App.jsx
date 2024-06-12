


import { useState } from "react";
import { createContext } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerForm from './pages/CustomerForm';
import OrderForm from './pages/OrderForm';
import AudienceForm from './pages/AudienceForm';
import CampaignForm from './pages/CampaignForm';
import CampaignList from './pages/CampaignList';
import IndexPage from './pages/IndexPage.jsx';
import ProfilePage from './pages/ProfilePage';
import Layout from './Layout';
import { UserContextProvider } from './UserContext';
import { BrowserRouter as Router } from 'react-router-dom';



axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

export const RecoveryContext = createContext();

function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function Navigatepages() {
    if (page === "login") return <LoginPage />;
    if (page === "otp") return <OTPInput />;
    if (page === "reset") return <Reset />;
    return <Recovered />;
  }

  return (
    <UserContextProvider>
      <RecoveryContext.Provider
        value={{ page, setPage, otp, setOTP, setEmail, email }}
      >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/customers" element={<CustomerForm />} />
          <Route path="/orders" element={<OrderForm />} />
          <Route path="/audience" element={<AudienceForm />} />
          <Route path="/campaignform" element={<CampaignForm />} />
          <Route path="/campaigns" element={<CampaignList />} />
          </Route>
        </Routes>
      </RecoveryContext.Provider>
    </UserContextProvider>
  );
}

export default App;
