import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewResults = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-white mb-6">View Results</h1>

        {/* Empty Table */}
        <table className="w-3/4 border-collapse border border-gray-600 text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 px-4 py-2">Column 1</th>
              <th className="border border-gray-600 px-4 py-2">Column 2</th>
              <th className="border border-gray-600 px-4 py-2">Column 3</th>
            </tr>
          </thead>
          <tbody>
            {/* Table data will go here */}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default ViewResults;
