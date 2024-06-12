import { useEffect, useState } from "react";
import axios from "axios";


import Footer from "../Footer";
import video from '/video1.mp4';
import { TypeAnimation } from 'react-type-animation';


export default function IndexPage() {
  
  return (
    <div className="p-0 m-0">
      <div className="relative">
        <video src={video} autoPlay loop muted className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-2xl font-bold">
   
         <div className="text-white text-4xl font-bold mb-4">
  <TypeAnimation
    sequence={['Welcome to ']}
    wrapper="span"
    speed={20}

  />
  <TypeAnimation
    sequence={['CRM Application...']}
    wrapper="span"
    speed={50}
    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
  
  />
</div>
          </div>
        </div>
      </div>
      <div>
  <section id="features" className="p-0 bg-gradient-to-b from-black to-black">
    <div className="flex flex-wrap justify-center">
      <div className="feature-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 text-center">
        <i className="fas fa-user-plus fa-beat-fade fa-2x" style={{ color: '#b3009b' }}></i>
        <h3 className="font-bold text-xl mt-2 text-white">Efficient Lead Management</h3>
        <p className="text-gray-500">Capture, track, and manage leads effectively to convert them into customers. Assign leads to sales representatives and track their progress.</p>
      </div>
      <div className="feature-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 text-center">
        <i className="fas fa-handshake fa-beat-fade fa-2x" style={{ color: '#b3009b' }}></i>
        <h3 className="font-bold text-xl mt-2 text-white">Streamlined Sales Process</h3>
        <p className="text-gray-500">Manage your sales pipeline efficiently. Track interactions with customers, set reminders for follow-ups, and close deals faster.</p>
      </div>
      <div className="feature-box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 text-center">
        <i className="fas fa-chart-line fa-beat-fade fa-2x" style={{ color: '#b3009b' }}></i>
        <h3 className="font-bold text-xl mt-2 text-white">Comprehensive Analytics</h3>
        <p className="text-gray-500">Gain insights into your business performance with detailed analytics. Track key metrics, analyze trends, and make data-driven decisions.</p>
      </div>
    </div>
  </section>
</div>

      <div>
        <Footer />
      </div>
      
    </div>
  )
}