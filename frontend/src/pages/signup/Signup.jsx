import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Send data to the backend
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message || "Control here!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Signup Failed!");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#cc8899]">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-14 flex flex-col items-center">
        <h2 className="text-[45px] font-bold tracking-tight mb-8 font-sans">SIGN UP</h2>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSignUp}>
            <label className="text-sm font-medium ml-2">Email</label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-4 bg-blue-50 rounded-full font-medium"
            />
            
            <label className="text-sm font-medium ml-2">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-4 bg-blue-50 rounded-full font-medium"
            />
            
            <label className="text-sm font-medium ml-2">Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-10 px-4 bg-blue-50 rounded-full font-medium"
            />

            <button
                className="w-full h-12 bg-blue-700 text-white text-lg rounded-full hover:cursor-pointer"
            >
                Sign Up
            </button>
        </form>
        <h5 className="text-base mt-5 ml-2">
          Already have an account? 
          <a href="/login" className="text-blue-600 underline">Login</a>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
