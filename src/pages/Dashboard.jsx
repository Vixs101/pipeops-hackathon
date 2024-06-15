// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-2">Your Health Is 100% Important</h2>
            <p className="mb-4">Health is a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity (– World Health Organization)</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">See Appointment</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Appointment Timeline</h3>
              <ul>
                <li className="border-b py-2">04-May-2023: Dental Treatment</li>
                <li className="border-b py-2">05-May-2023: Consultation</li>
                <li className="border-b py-2">04-June-2023: Malaria Test</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Medical Supplement</h3>
              <ul>
                <li className="border-b py-2">Vitamin D: 600-800 IU</li>
                <li className="border-b py-2">Nootropic: 10 Capsules</li>
                <li className="border-b py-2">Probiotics: 1-10 billion CFUs</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold mb-4">My Doctors</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Doctor's Name</th>
                  <th className="px-4 py-2">Diagnosis</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Contact</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">James Adewale</td>
                  <td className="border px-4 py-2">Cavities</td>
                  <td className="border px-4 py-2">64%</td>
                  <td className="border px-4 py-2">+2(3)8164275</td>
                  <td className="border px-4 py-2">24 May, 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Jenny Peter</td>
                  <td className="border px-4 py-2">MIR Scan</td>
                  <td className="border px-4 py-2">64%</td>
                  <td className="border px-4 py-2">+2(3)8164275</td>
                  <td className="border px-4 py-2">24 May, 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">James Linda</td>
                  <td className="border px-4 py-2">Consultation</td>
                  <td className="border px-4 py-2">64%</td>
                  <td className="border px-4 py-2">+2(3)8164275</td>
                  <td className="border px-4 py-2">24 May, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
