import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './dashboard.css'

function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <video id="home-video" autoPlay muted loop>
          <source src="https://www.festivalpro.com/videos/homepage.mp4" type="video/mp4" />
        </video>
        <nav className="navbar">
          <div className="iitrpr">
            IIT ROPAR
          </div>
          <div className="navlist">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#events">EVENTS</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </nav>
  
        <div className="container">
          <h1>Fests</h1>
          <p>ORGANIZE AND RELAX</p>
        </div>
    </>
  )
}

export default Dashboard
