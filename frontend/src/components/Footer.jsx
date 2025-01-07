

function Footer () {
    return (
        <div className="footer">
            <div className="explore">
                <p className="foot-title">Explore More :</p>
                <p><a target="_blank" className="link-text" href="https://www.zeitgeist.org.in/">Zeitgeist</a></p>
                <p><a target="_blank" className="link-text" href="https://www.advitiya.tech/">Advitiya</a></p>
                <p><a target="_blank" className="link-text" href="https://aarohan-iitrpr.github.io/events.html">Aarohan</a></p>
            </div>

            <div className="follow">
                <p className="foot-title">Follow us :</p>
                <div className="links">
                    <a target="_blank" className="link-icon" href="https://www.instagram.com/softcom_iitrpr/"><i className="fab fa-instagram"></i></a>
                    <a className="link-icon" href="https://in.linkedin.com/company/softcom-iitrpr" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a className="link-icon" href="https://github.com/software-community" target="_blank"><i class="fab fa-github"></i></a>
                </div>

                <p className="foot-title">Email us :</p>
                    <a className="link-email" href="mailto:softcom@iitrpr.ac.in">softcom@iitrpr.ac.in</a>
            </div>
                
            <div className="services">
                <p className="foot-title">Services</p>
                <p><a className="link-text" href="">About us</a></p>
                <p><a className="link-text" href="">Login</a></p>
                <p><a className="link-text" href="">Sign up</a></p>
                <p><a className="link-text" href="">Add fest</a></p>
                <p><a className="link-text" href="">Add event</a></p>
            </div>

            <div className="location">
                <p className="foot-title">Location</p>
                <p className="">Indian Institute of Technology Ropar</p>
                <p className="">Rupnagar, Punjab, India</p>
                <p className="">Pincode: 140001</p>
            </div>
        </div>
    );
}

export default Footer