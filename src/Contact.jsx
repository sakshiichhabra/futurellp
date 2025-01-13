import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-4xl w-full p-8 bg-yellow-500 text-yellow-50 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-yellow-500">Get in Touch</h1>
            <p className="text-yellow-100 mb-8">
              Contact us to schedule a session and skyrocket your business today.
            </p>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="What's Your Name?"
                className="w-full p-3 text-red-500 bg-yellow-50 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="What's Your Email?"
                className="w-full p-3 text-black bg-yellow-50 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="What's Your Company?"
                className="w-full p-3 text-red-500 bg-yellow-50 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="How Can We Help?"
                className="w-full p-3 text-red-500 bg-yellow-50 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <textarea
                placeholder="What's Your Message"
                rows="4"
                className="w-full p-3 text-red-500 bg-yellow-50 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-yellow-500 text-black font-bold border-2 rounded-md hover:bg-orange-00 focus:outline-none focus:ring-4 focus:ring-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between bg-yellow-50 p-6 rounded-lg h-80 my-auto border-red-100">
            <h2 className="text-lg font-semibold text-black">EMAIL</h2>
            <p className="text-black mb-6">vd@futurevuesolutions.com</p>
            <h2 className="text-lg font-semibold text-black">PHONE</h2>
            <p className="text-black mb-6">+91 9810224850
            </p>
            <h2 className="text-lg font-semibold text-black">ADDRESS</h2>
            <p className="text-black">Address: 2nd Floor, Palm Court, Sector 14, Gurugram 
            122007, Haryana, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
