import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './events.css'


function Events() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="events">
      <nav className="navbar">
    <div id="headings">
      <h1 id="fests">Fests</h1>
      <h4 id="org">ORGANISE AND RELAX</h4>
    </div>
    <div className="search-container">
      <input type="search" id="search" placeholder="Search Fest" />
      <button type="submit" id="submit">Enter</button>
    </div>
  </nav>
  <main>
    <div className="main">
      <div id="serial_number">Serial Number</div>
      <div id="photo">Photo</div>
      <div id="member_name">Member Name</div>
      <div id="mobile_number">Mobile Number</div>
      <div id="email">Email</div>
    </div>
  </main>
</div>
    </>
  )
}

export default Events;
