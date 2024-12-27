

function Footer () {
    return (
        <div className="footer">
            <div className="explore">
                <p className="foot-title">Explore More :</p>
                <p><a target="_blank" className="link-text" href="https://www.zeitgeist.org.in/">Zeitgeist</a> | <a target="_blank" className="link-text" href="https://www.advitiya.tech/">Advitiya</a> | <a target="_blank" className="link-text" href="https://aarohan-iitrpr.github.io/events.html">Aarohan</a></p>
            </div>

            <div className="follow">
                <p className="foot-title">Follow Us :</p>
                <div className="links">
                    <a target="_blank" className="link-icon" href="https://www.instagram.com/softcom_iitrpr/"><i className="fab fa-instagram"></i></a>
                    <a className="link-icon" href="https://in.linkedin.com/company/softcom-iitrpr" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a className="link-icon" href="https://github.com/software-community" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
                
            <div className="email">
                <p>Email us : <a className="link-email" href="mailto:softcom@iitrpr.ac.in">softcom@iitrpr.ac.in</a></p>
            </div>
        </div>
    );
}

export default Footer