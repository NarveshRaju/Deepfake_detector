import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4 text-center mt-8">
      <p>© 2025 DeepShield. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Contact Us</a>
        <a href="#" className="hover:text-white">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
