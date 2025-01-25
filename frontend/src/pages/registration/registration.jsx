import React, { useState, useEffect } from "react";
import "./registration.css";

function Registration() {
  const [eventMembers, setEventMembers] = useState(1); // Default to 1 member
  const [festPhoto, setFestPhoto] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/registrationss")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setEventMembers(data.event_members || 1); // Default to 1 if undefined
          setFestPhoto(data.fest_photo);
        })
        .catch((error) => {
          console.error("Error fetching the data:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="containers_registration">
        <div className="welcome-container">
          <h1>Welcome Page</h1>
          <p className="para">
            Register now to showcase your talents, connect with like-minded
            individuals, and make lasting memories. We can't wait to see you
            there!
          </p>
        </div>

        <div className="form-container_registration">
          <h2 className="form-title_registration">Register for Fest</h2>
          <p className="subtitle">Please fill in your details below</p>

          {festPhoto && (
            <div className="image-container">
              <img
                src={`data:image/png;base64,${festPhoto}`}
                alt="Fest Banner"
                className="fest-photo"
              />
            </div>
          )}

          <form
            action="http://localhost:3000/registration"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="parentForm">
              {/* Team Leader Details */}
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
                    type="tel"
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

              {/* Team Members Details */}
              <div className="child2">
                {[...Array(eventMembers)].map((_, i) => (
                  <div className="form-group_registration" key={i}>
                    <label htmlFor={`member${i + 1}_name`}>
                      Member {i + 1} Name:
                    </label>
                    <input
                      type="text"
                      id={`member${i + 1}_name`}
                      name={`member${i + 1}_name`}
                      placeholder={`Enter Member ${i + 1} name`}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="but_registration">
              <button type="submit" className="button_registration">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="explore">
          <p className="foot-title">Explore More :</p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
              href="https://www.zeitgeist.org.in/"
            >
              Zeitgeist
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
              href="https://www.advitiya.tech/"
            >
              Advitiya
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link-text"
              href="https://aarohan-iitrpr.github.io/events.html"
            >
              Aarohan
            </a>
          </p>
        </div>

        <div className="follow">
          <p className="foot-title">Follow us :</p>
          <div className="links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link-icon"
              href="https://www.instagram.com/softcom_iitrpr/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link-icon"
              href="https://in.linkedin.com/company/softcom-iitrpr"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link-icon"
              href="https://github.com/software-community"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="foot-title">Email us :</p>
          <a
            className="link-email"
            href="mailto:softcom@iitrpr.ac.in"
          >
            softcom@iitrpr.ac.in
          </a>
        </div>

        <div className="services">
          <p className="foot-title">Services</p>
          <p>
            <a className="link-text" href="">
              About us
            </a>
          </p>
          <p>
            <a className="link-text" href="">
              Login
            </a>
          </p>
          <p>
            <a className="link-text" href="">
              Sign up
            </a>
          </p>
          <p>
            <a className="link-text" href="">
              Add fest
            </a>
          </p>
          <p>
            <a className="link-text" href="">
              Add event
            </a>
          </p>
        </div>

        <div className="location">
          <p className="foot-title">Location</p>
          <p>Indian Institute of Technology Ropar</p>
          <p>Rupnagar, Punjab, India</p>
          <p>Pincode: 140001</p>
        </div>
      </div>
    </>
  );
}

export default Registration;
