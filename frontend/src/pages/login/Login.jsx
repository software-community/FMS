import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Send data to the backend
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message || "control here!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login Failed!");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#cc8899]">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-14 flex flex-col items-center">
        <h2 className="text-[45px] font-bold tracking-tight mb-8 font-sans">LOGIN</h2>
        <form className="w-full" onSubmit={handleLogin}>
          <h4 className="text-sm font-medium mb-2 ml-2">Email</h4>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 px-4 mb-5 bg-blue-50 rounded-full font-medium"
          />
          <h4 className="text-sm font-medium mb-2 ml-2">Password</h4>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 px-4 mb-5 bg-blue-50 rounded-full font-medium"
          />
          <h5 className="text-base mb-5 ml-2">Forgot password?</h5>
          <button className="w-full h-12 bg-blue-700 text-white text-lg rounded-full hover:cursor-pointer">
            Login
          </button>
        </form>
        <h5 className="text-base mt-5 ml-2">
          Don't have an account?
          <a href="/signup" className="text-blue-600 underline">SignUp</a>
        </h5>
      </div>
    </div>
  );
};

export default Login;
