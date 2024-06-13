import React from 'react';

const Landing = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 py-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-green-600">Welcome to HealthHelp</h1>
        <p className="text-gray-700 mt-4">
          Your one-stop solution for managing your health information online.
        </p>
        <div className="mt-8">
          <a
            href="/signup"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Get Started
          </a>
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
    </main>
  );
};

export default Landing;
