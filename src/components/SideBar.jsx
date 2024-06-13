// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-4">HealthHelp</h2>
      <nav className="flex flex-col p-4">
        <Link to="/dashboard/profile" className="py-2 px-4 hover:bg-gray-700 rounded">
          Profile
        </Link>
        <Link to="/dashboard/appointments" className="py-2 px-4 hover:bg-gray-700 rounded">
          Appointments
        </Link>
        <Link to="/dashboard/health-metrics" className="py-2 px-4 hover:bg-gray-700 rounded">
          Health Metrics
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
