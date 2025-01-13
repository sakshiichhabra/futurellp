import React, { useState, useEffect } from "react";
import leaderss from "../src/le.png";

const LeadershipSection = () => {
  const [visiblePoints, setVisiblePoints] = useState(0);

  const points = [
    "Veteran of the glass industry with nearly 27 years of experience.",
    "Expertise in strategic sales, marketing, and large-scale plant operations.",
    "Built high-performing teams and driven sustainable growth.",
    "Transformed a small processing company into India’s second-largest float glass producer.",
    "Visionary leader with a people-centric approach.",
    "Contributions to industry forums have helped raise standards across the sector.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePoints((prev) => (prev < points.length ? prev + 1 : prev));
    }, 500); // Delay between each point (500ms)
    return () => clearInterval(interval);
  }, [points.length]);

  return (
    <div className="min-h-screen bg-yellow-500 flex items-center justify-center py-12 px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Points */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold text-[black] mb-6">
            Our Leadership
          </h2>
          <div className="space-y-6">
            {points.map((point, index) => (
              <p
                key={index}
                className={`text-lg italic text-gray-800 transition-opacity duration-500 ${
                  index < visiblePoints ? "opacity-100" : "opacity-0"
                }`}
              >
                  ➣ {point}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex items-center justify-center">
          <img
            src={leaderss}
            alt="Leadership"
            className="rounded-full shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
