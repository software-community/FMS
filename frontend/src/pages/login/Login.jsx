import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default button behavior

    // Log email and password to console (for debugging)
    console.log({ email, password });

    // Send data to the backend
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login Success:", data);
        alert(data.message || "Login Successful!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login Failed!");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#cc8899]">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-14 flex flex-col items-center">
        <h2 className="text-[45px] font-bold tracking-tight mb-8 font-sans">
          LOGIN
        </h2>
        <div className="w-full">
          <h4 className="text-sm font-medium mb-2 ml-2">Email</h4>
          <input
            className="w-full h-10 px-4 mb-5 bg-blue-50 rounded-full font-medium"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4 className="text-sm font-medium mb-2 ml-2">Password</h4>
          <input
            className="w-full h-10 px-4 mb-5 bg-blue-50 rounded-full font-medium"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h5 className="text-base mb-5 ml-2">Forgot password?</h5>
          <button
            className="w-full h-12 bg-blue-700 text-white text-lg rounded-full hover:cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
          <h5 className="text-base mt-5 ml-2">
            Don't have an account?
            <a href="/signup" className="text-blue-600 underline">
              SignUp
            </a>
          </h5>
          <div className="flex items-center justify-center mt-5">
            <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-black-700 dark:text-black-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
