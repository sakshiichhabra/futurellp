import React from "react";
import buildImage from "../src/build.png";

const Home = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full bg-gray-100 text-black"
      style={{
        backgroundImage: `url(${buildImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content Section */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="transform -translate-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4">
            Welcome to FutureVue Solutions LLP
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200">
            Shaping the Future of India’s Glass and Allied Industries
          </p>
        </div>

        {/* Cards Section */}
        <div className="absolute bottom-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-yellow-500 p-3 rounded-full text-white text-xl">
                👤
              </span>
              <h3 className="text-base sm:text-lg font-bold">
                Revolutionize the Industry
              </h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Revolutionize the glass and allied industries by elevating
              production, quality, and cost efficiency to global standards.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-yellow-500 shadow-md rounded-lg p-4 sm:p-6 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-white p-3 rounded-full text-yellow-500 text-xl">
                📄
              </span>
              <h3 className="text-base sm:text-lg font-bold">
                Deep Industry Expertise
              </h3>
            </div>
            <p className="text-sm sm:text-base">
              Guided by deep industry expertise and innovative engineering.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-yellow-500 p-3 rounded-full text-white text-xl">
                🔧
              </span>
              <h3 className="text-base sm:text-lg font-bold">
                Customized Consultancy
              </h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Offer customized consultancy and services to unlock the full
              potential of your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
