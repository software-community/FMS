import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css'

// Import pages here
import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
// import Login from './pages/login/Login';
// import SignUp from './pages/signup/Signup';
// and so on....

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/" element={<SignUp />} /> */}
      {/* And so on.... */}
    </Routes>
  </BrowserRouter>
)
