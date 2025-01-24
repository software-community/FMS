import { useState } from 'react';
import './registration.css';

function Registration() {
var event_members;
var event_photo;
var fest_photo;
  const fetchData = () => {
    fetch('http://localhost:3000/registrationss') // Call the backend route
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
      })
      .then(data => {
        event_members = data['event_members'];
        event_photo = data['event_photo'];
        fest_photo = "data:image/png;base64,"+""+data['fest_photo'];

      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  };

  fetchData();
  let n=event_members;
  return (
    <>
      <body className="bg-gray-900 main_registration">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <div>
        <img src={`data:image/png;base64,${fest_photo}`} />
        </div>
        <div className="containers_registration">
          <form
            action="http://localhost:3000/registration"
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
                <div className="child2">       {/*Made a loop to show just that much number of fields for member names which are required*/}
                  {[...Array(n)].map((_, i) => (
                    <div className="form-group_registration" key={i}>
                      <label htmlFor={`member${i + 1}_name`}>Member {i + 1} Name:</label>
                      <input
                        type="text"
                        id={`member${i + 1}_name`}
                        name={`member${i + 1}_name`}
                        required
                      />
                    </div>
                  ))}
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
