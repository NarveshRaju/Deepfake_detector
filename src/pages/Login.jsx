import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="w-80 p-6 bg-gray-800 rounded-lg">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          className="w-full p-2 mb-4 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2">Password:</label>
        <input
          type="password"
          className="w-full p-2 mb-4 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
