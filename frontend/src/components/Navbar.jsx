
function Navbar () {
    return (
        <section className="navbar">
            <div className="navbar-left">
                <a href="/"><img className="logo" src="./assets/softcom-logo.png" alt="image" /></a>
            </div>

            <div className="navbar-right">
                <button className="login-button">Login</button>
                <button className="sign-up-button">Sign Up</button>
            </div>
        </section>
    );
}

export default Navbar