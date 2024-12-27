

function WhatIsFMS() {
    return (
        <section className="what">
            <div className="what-title">
                <h1>What is FMS?</h1>
            </div>
            <div className="what-content">
                <div className="what-is-fms">
                    <img className="collage" src="./collage/collage.jpg" alt="image" />
                </div>
                <div className="ans-what">
                    <div className="ans-what-title">
                        <h2>IIT ROPAR's</h2>
                        <h3>Fest Management System (FMS)</h3>
                    </div>
                   
                   <div className="ans-what-grid">
                        <div className="grid box1">
                            <p className="box1-title">User Friendly Interface</p>
                            <ul>
                                <li>Personal Dashboard</li>
                                <li>Detailed schedule of Events timing and location</li>
                                <li>Real-Time Notifications and Updates</li>
                            </ul>
                            <img className="dashboard pic" src="./assets/dashboard4.jpg" alt="dashboard-image" />
                        </div>
                        <div className="grid box2">
                            <p className="box2-title">Advertise your Event</p>
                            <ul>
                                <li>Upload media of event on different platforms</li>
                                <li>Shareable event pages for promotion</li>
                                <img className="pic" src="./assets/advertise.png" alt="advertise" />
                            </ul>
                        </div>
                        <div className="grid box3">
                            <p className="box3-title">Features</p>
                            <ul>
                                <li>Add Multiple Events</li>
                                <button className="add-button">+ ADD</button>
                                <li>Capable of managing Large People</li>
                                <img className="pic" src="./assets/audience.png" alt="large-people" />
                            </ul>
                        </div>
                        <div className="grid box4">
                            <p className="box4-title">Security Features</p>
                         
                                <ul>
                                    <li>Secure Registration process</li>
                                    <li>Encrypted data</li>
                                    <li>OAuth Google Mechanism</li>
                                </ul>
                          
                            <img className="pic" src="./assets/security.png" alt="security image" />
                        </div>
                   </div>

                </div>
            </div>
            
        </section>
    );
}

export default WhatIsFMS