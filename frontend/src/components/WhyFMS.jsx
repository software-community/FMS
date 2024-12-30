
function WhyFMS () {
    return (
        <section className="why">
            <div className="why-fms">
                <h1 className="why-title">Why choose FMS?</h1>
            </div>
            <div className="ans-why">
                
                <div className="ans-why-box1">
                    <p className="why-1st">&raquo; Built on Popular Tech Stack</p>
                    {/* image layout */}
                    <section className="image-layout">
                        <div className="center-image">
                            <img src="./assets/mern-stack.png" alt="Center Image" />
                        </div>
                        <div className="corner-image top-left">
                            <img src="./assets/mongodb.png" alt="Top Left" />
                        </div>
                        <div className="corner-image top-right">
                            <img src="./assets/express-js.jpg" alt="Top Right" />
                        </div>
                        <div className="corner-image bottom-left">
                            <img src="./assets/react-js.png" alt="Bottom Left" />
                        </div>
                        <div className="corner-image bottom-right">
                            <img src="./assets/node-js.png" alt="Bottom Right" />
                        </div>

                        <div className="line line-top-left"></div>
                        <div className="line line-top-right"></div>
                        <div className="line line-bottom-left"></div>
                        <div className="line line-bottom-right"></div>
                    </section>
                </div>
                

                <div className="ans-why-box2">
                    <p className="why-1st">&raquo; Stay Encrypted with OAuth Google's Authorisation</p>
                    <div className="security-container">
                        <div className="badge">
                        <div className="shackle"></div>
                        <div className="lock">
                            <div className="keyhole"></div>
                        </div>
                        <div className="ring"></div>
                        </div>
                        <p className="lock-p">Secure Access</p>
                    </div>
                </div>
            

                <div className="ans-why-box3">
                    <p className="why-1st">&raquo; Centralized Event Management</p>
                    <img className="collage2" src="./collage/collage2.jpg" alt="event-manage-pic" />
                </div>


                <div className="ans-why-box4">
                    <p className="why-1st">&raquo; Real-Time Updates and Communication</p>
                    {/* a notification animation */}
                    <div class="phone">
                        <div class="screen">
                        <div class="status-bar">12:45 PM</div>
                        <div class="notifications">
                            <div class="notification">
                            <h4>New Message</h4>
                            <p>Advitiya Fest is successfully added.</p>
                            </div>
                            <div class="notification">
                            <h4>Schedule Updated</h4>
                            <p>Don't forget your event at 3pm at the Sports Complex.</p>
                            </div>
                            <div class="notification">
                            <h4>New Message</h4>
                            <p>Aarohan Fest successfully added.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </section>
    );
}

export default WhyFMS