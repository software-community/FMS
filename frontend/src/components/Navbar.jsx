
function Navbar () {
    return (
        <section className="navbar">
            <div className="navbar-left">
                <img className="logo" src="./assets/softcom-logo.png" alt="image" />
            </div>

            <div className="navbar-right">
                <button className="login-button">Login</button>
                <button className="sign-up-button">Sign Up</button>
            </div>
        </section>
    );
}

export default Navbar