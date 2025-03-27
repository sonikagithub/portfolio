import React from "react";

const Education = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl transform transition-all duration-500 hover:scale-105 animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Left side: Text content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-extrabold text-[#E90E65]">
              Education
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-gray-700">
                <strong className="text-[#E90E65]">Degree:</strong> Bachelor of
                Technology
              </p>
              <p className="text-gray-700">
                <strong className="text-[#E90E65]">Field:</strong> Computer
                Science Engineering
              </p>
              <p className="text-gray-700">
                <strong className="text-[#E90E65]">University:</strong> Babu
                Banarasi Das University, Lucknow
              </p>
              <p className="text-gray-700">
                <strong className="text-[#E90E65]">Duration:</strong> 2020 -
                2024
              </p>
              <p className="text-gray-700">
                <strong className="text-[#E90E65]">Percentage:</strong> 83%
              </p>
              <p className="text-gray-700">
                <strong className="text-[#E90E65]">SGPA:</strong> 8.4
              </p>
            </div>
          </div>

          {/* Right side: Logo */}
          <div className="flex justify-center items-center animate-slide-in-right">
            <img
              src="https://bbdu.ac.in/wp-content/uploads/2018/03/300.jpg"
              alt="University Logo"
              className="w-48 h-48 object-contain rounded-full shadow-lg border-4 border-[#E90E65] transform hover:rotate-6 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
