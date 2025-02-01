import { Link } from 'react-router'
import './dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <video id="home-video" autoPlay muted loop>
        <source src="https://www.festivalpro.com/videos/homepage.mp4" type="video/mp4" />
      </video>
      
      <nav className="navbar">
        <div className="iitrpr">
          IIT ROPAR
        </div>
        <div className="navlist">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/events">EVENTS</Link></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <h1>Fests</h1>
        <p>ORGANIZE AND RELAX</p>
      </div>
    </div>
  )
}

export default Dashboard
