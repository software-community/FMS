import React from 'react';
import './registration.css';


function Registration() {
  return ( 
    <div className="containers_registration">
     
     

      
      <div className="welcome-container">
        <h1>Welcome Page</h1>
        <p className="para">
          Register now to showcase your talents, connect with like-minded individuals, 
          and make lasting memories. We can't wait to see you there!
        </p>
      </div>

     
      <div className="form-container_registration">
        <h2 className="form-title_registration">Register for Fest</h2>
        <p className="subtitle">Please fill in your details below</p>

        <form
          action="http://localhost:3000/registration"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="parentForm">
           
            <div className="child1">
              <div className="form-group_registration">
                <label htmlFor="team_name">Team Name:</label>
                <input
                  type="text"
                  id="team_name"
                  name="team_name"
                  placeholder="Enter your team name"
                  required
                />
              </div>
              <div className="form-group_registration">
                <label htmlFor="leader_name">Team Leader Name:</label>
                <input
                  type="text"
                  id="leader_name"
                  name="leader_name"
                  placeholder="Enter team leader's name"
                  required
                />
              </div>
              <div className="form-group_registration">
                <label htmlFor="leader_phone">Team Leader Phone Number:</label>
                <input
                  type="number"
                  id="leader_phone"
                  name="leader_phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="form-group_registration">
                <label htmlFor="leader_email">Team Leader Email:</label>
                <input
                  type="email"
                  id="leader_email"
                  name="leader_email"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

           
            <div className="child2">
              <div className="form-group_registration">
                <label htmlFor="member2_name">Member 2 Name:</label>
                <input
                  type="text"
                  id="member2_name"
                  name="member2_name"
                  placeholder="Enter member 2 name"
                  required
                />
              </div>
              <div className="form-group_registration">
                <label htmlFor="member3_name">Member 3 Name:</label>
                <input
                  type="text"
                  id="member3_name"
                  name="member3_name"
                  placeholder="Enter member 3 name"
                  required
                />
              </div>
              <div className="form-group_registration">
                <label htmlFor="member4_name">Member 4 Name:</label>
                <input
                  type="text"
                  id="member4_name"
                  name="member4_name"
                  placeholder="Enter member 4 name"
                  required
                />
              </div>
              <div className="form-group_registration">
                <label htmlFor="member5_name">Member 5 Name:</label>
                <input
                  type="text"
                  id="member5_name"
                  name="member5_name"
                  placeholder="Enter member 5 name"
                  required
                />
              </div>
            </div>
          </div>

         
          <div className="but_registration">
            <button
              type="submit"
              className="button_registration"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
