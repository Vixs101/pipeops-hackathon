import React from 'react';

import Sidebar from '../components/SideBar';

const Dashboard = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow bg-gray-100 p-6">
           
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
