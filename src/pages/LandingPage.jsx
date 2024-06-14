import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow bg-gray-100 py-20">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-green-600">Welcome to HealthHelp</h1>
          <p className="text-gray-700 mt-4">
            Your one-stop solution for managing your health information online.
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="mt-12 w-full px-4 md:w-3/4 lg:w-1/2 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
          <ul className="mt-6 space-y-4">
            <li className="text-gray-700">Schedule appointments with ease</li>
            <li className="text-gray-700">Request prescription refills</li>
            <li className="text-gray-700">Communicate with healthcare providers</li>
            <li className="text-gray-700">Track your health metrics and progress</li>
          </ul>
        </section>

        <section className="mt-12 w-full px-4 md:w-3/4 lg:w-1/2 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
          <div className="mt-6 space-y-6">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700">
                "HealthHelp has completely transformed how I manage my health. It's so easy to use!"
              </p>
              <p className="text-green-600 mt-2">- Ayodeji</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700">
                "I love being able to communicate with my doctor and track my health progress in one place."
              </p>
              <p className="text-green-600 mt-2">- Elijah</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700">
                "Scheduling appointments has never been easier. Highly recommend HealthHelp!"
              </p>
              <p className="text-green-600 mt-2">- Maureen</p>
            </div>
          </div>
        </section>

        <section className="mt-12 w-full px-4 md:w-3/4 lg:w-1/2 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
          <div className="mt-6 space-y-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold text-green-600">Step 1: Sign Up</h3>
              <p className="text-gray-700 mt-2">
                Create your account by providing basic information. It's quick and easy!
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold text-green-600">Step 2: Connect</h3>
              <p className="text-gray-700 mt-2">
                Link your profile with your healthcare providers and start managing your health records.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold text-green-600">Step 3: Manage</h3>
              <p className="text-gray-700 mt-2">
                Schedule appointments, request refills, and track your health metrics all in one place.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
