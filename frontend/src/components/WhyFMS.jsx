import styles from "./dashboard.module.css"

function WhyFMS () {
    return (
        <section className="why">
            <div className="why-fms">
                <h1 className="why-title">Why choose FMS?</h1>
            </div>
            <div className="ans-why">
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

                <p className="why-1st">&raquo; Centralized Event Management</p>
                <img className="collage2" src="./collage/collage2.jpg" alt="event-manage-pic" />

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

                <p className="why-1st">&raquo; User Personal Dashboard</p>
                <div className={styles.dashboard_container}>
                    <div className={styles.left}>
                        <div className={styles.three_icons}>
                            <span className={styles.red}></span>
                            <span className={styles.yellow}></span>
                            <span className={styles.green}></span>
                        </div>
                            <hr />
                        <div className={styles.profile}>
                            <h4 className={styles.dashboard_title}>DASHBOARD</h4>
                            <img src="./assets/profile-pic.jpeg" className={styles.profile_pic} alt="profile-pic" />
                            <h2>Rahul</h2>
                            <h4>+91 9573873627</h4>
                            <button className={styles.addFest}>ADD FEST</button>
                        </div>

                        <div className={styles.menu_list}>
                            <ul style={{listStyle : "none"}}>
                                <li className={styles.list_item}>Home</li>
                                <li className={styles.list_item_2}>Your Fests</li>
                                <li className={styles.list_item}>Services</li>
                                <li className={styles.list_item}>About us</li>
                                <li className={styles.list_item}>Settings</li>
                            </ul>
                        </div>

                    </div>
                    <div className={styles.right}>
                        <div className={styles.top}>
                            <div className={styles.yourFests}>
                                Your Fests
                            </div>
                        </div>
                        <div className={styles.bottom}>
                                <div className={styles.advitiya}>
                                    <img className={styles.grid_pic} src="./assets/advitiya.jpeg" alt="advitiya"/>
                                    <h3>Advitiya</h3>
                                    <div className={styles.timings}>Time : 2:00 - 5:00 pm</div>
                                    <div className={styles.venue}>Venue : Sutlej Basketball Court</div>
                                </div>
                                <div className={styles.aarohan}>
                                    <img className={styles.grid_pic} src="./assets/aarohan.png" alt="aarohan"/>
                                    <h3>Aarohan</h3>
                                    <div className={styles.timings}>Time : 3:00 - 6:00 pm</div>
                                    <div className={styles.venue}>Venue : Sports Complex</div>
                                </div>
                                <div className={styles.zeitgeist}>
                                    <img className={styles.grid_pic} src="./assets/zeitgeist.jpeg" alt="zeitgeist"/>
                                    <h3>Zeitgeist</h3>
                                    <div className={styles.timings}>Time : 7:00 - 10:00 pm</div>
                                    <div className={styles.venue}>Venue : Main Entry Gate</div>
                                </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhyFMS