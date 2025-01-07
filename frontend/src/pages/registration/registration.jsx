import { useState } from 'react';
import './registration.css';

function Registration() {
  return (
    <>
      <body className="bg-gray-900 main_registration">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

        <div className="containers_registration">
          <form
            action="http://localhost:3000/register"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="form-container_registration">
              <h2 className="form-title_registration">Register for Fest</h2>
              <div className="parentForm">
                <div className="child1">
                  <div className="form-group_registration">
                    <label htmlFor="name">Team Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="team_name"
                      required
                    />
                  </div>
                  <div className="form-group_registration">
                    <label htmlFor="name">Team Leader Name:</label>
                    <input
                      type="name"
                      id="leader name"
                      name="leader_name"
                      required
                    />
                  </div>
                  <div className="form-group_registration">
                    <label htmlFor="phone">Team Leader Phone Number:</label>
                    <input
                      type="number"
                      id="phone"
                      name="leader_phone"
                      required
                    />
                  </div>
                
                  <div className="form-group_registration">
                    <label htmlFor="email">Team Leader Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="leader_email"
                      required
                    />
                  </div>
                  </div>
                <div className="child2">
                  <div className="form-group_registration">
                    <label htmlFor="name">Member 2 Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="member2_name"
                      required
                    />
                  </div>
                  <div className="form-group_registration">
                    <label htmlFor="name">Member 3 Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="member3_name"
                      required
                    />
                  </div>
                  <div className="form-group_registration">
                    <label htmlFor="name">Member 4 Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="member4_name"
                      required
                    />
                  </div>
                  <div className="form-group_registration">
                    <label htmlFor="name">Member 5 Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="member5_name"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="but_registration">
              <button
                type="submit"
                className="button_registration text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="line_under_head_registration"></div>

        <footer>
          <div className="query">
            <div className="no">Questions? Call 000-800-919-1694</div>
            {/* Footer Content */}
          </div>
        </footer>
      </body>
    </>
  );
}

export default Registration;
