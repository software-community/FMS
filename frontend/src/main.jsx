import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

// Import pages here
// import Home from './pages/home/Home';
import LandingPage from './pages/Landing Page/landingPage';
import Event from './pages/addevent/addevent'; 
import Fest from './pages/addfest/addfest';
import Payment from './pages/Payment Page/Payment'
// import Login from './pages/login/Login';
// import SignUp from './pages/signup/Signup';
// and so on....

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/addevent" element={<Event />} />
      <Route path="/addfest" element={<Fest />} />
      <Route path="/payment" element={<Payment />} />
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/" element={<SignUp />} /> */}
      {/* And so on.... */}
    </Routes>
  </BrowserRouter>
)