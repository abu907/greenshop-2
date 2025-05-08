import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Our Website</h1>
        <p className="text-lg">Thank you for visiting. Stay connected!</p>
        <div className="mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
