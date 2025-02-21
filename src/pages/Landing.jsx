import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Real Faces, Real Stories</h1>
        <div className="space-x-4">
          <button
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 text-xl"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 text-xl"
            onClick={() => navigate("/home")}
          >
            Use Without Logging In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
