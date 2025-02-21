import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate(); // Navigation function

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    addValidFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    addValidFiles(files);
  };

  const addValidFiles = (files) => {
    const allowedTypes = ["video/mp4", "image/png", "image/jpeg"];
    const validFiles = files.filter((file) => allowedTypes.includes(file.type));

    if (validFiles.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
    } else {
      alert("Only MP4, PNG, and JPEG files are allowed!");
    }
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-6">
        <h1 className="text-4xl font-bold text-white mb-6">Drag & Drop File Upload</h1>

        {/* Drop Zone */}
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/2 min-h-[200px] flex flex-col items-center justify-center border-2 border-dashed border-white"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className="text-white text-lg">Drag & Drop files here</p>
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer bg-white text-gray-800 font-semibold px-4 py-2 mt-4 rounded-md hover:bg-gray-200"
          >
            Browse Files
          </label>
        </div>

        {/* Display Selected Files */}
        {selectedFiles.length > 0 && (
          <div className="mt-4 w-1/2 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Selected Files:</h2>
            <ul>
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span className="text-gray-700">{file.name}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFile(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View Results Button */}
        <button
          onClick={() => navigate("/view-results")}
          className="mt-6 bg-[#1a1a2e] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#0f3460] transition duration-300"
        >
          View Results
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
