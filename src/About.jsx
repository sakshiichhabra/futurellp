import React from 'react';
import innovation from "../src/inno.png";
const AboutUs = () => {
  const items = [
    {
      title: "Driving Innovation",
      
      description:
        "Dedicated to transforming India’s glass and allied industries.",
      image: "./src/inno.png", // Replace with your image URLs
      
    },
    {
      title: "Efficiency Excellence",
      
      description:
        "Help businesses achieve global benchmarks in production quality and cost.",
      image: "https://www.pexels.com/photo/close-photography-of-red-and-pink-rose-56866/", // Replace with your image URLs
      
    },
    {
      title: "Engineering Expertise",
      
      description:
        "Combine cutting- edge engineering with extensive local expertise.",
      image: "https://via.placeholder.com/150", // Replace with your image URLs
      
    },
    {
      title: "Tailored Solutions",
      
      description:
        "Provide tailored solutions to address unique challenges and opportunities",
      image: "https://via.placeholder.com/150", // Replace with your image URLs
      
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 underline transition-colors duration-50">
          About Us 
        </h2>
        <p className="text-gray-600 mb-12">
          With functionalized infrastructures, interactively productize premium technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <span className="absolute top-0 right-0 w-6 h-6 bg-yellow-500 rounded-full"></span>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-800 mt-2">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.description}</p>
              
              <div className="border-b-2 border-yellow-500 w-20 mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
