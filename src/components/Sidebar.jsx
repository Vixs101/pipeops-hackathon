// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md fixed">
      <div className="p-6 text-xl font-semibold">HealthHelp</div>
      <nav className="mt-10">
        <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Dashboard
        </Link>
        <Link to="/health-info" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Health Info
        </Link>
        <Link to="/appointments" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Appointments
        </Link>
        <Link to="/prescriptions" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Prescriptions
        </Link>
        <Link to="/messages" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Messages
        </Link>
        <Link to="/health-metrics" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Health Metrics
        </Link>
        <Link to="/settings" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Settings
        </Link>
        <Link to="/feedback" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
          Feedback & Support
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
