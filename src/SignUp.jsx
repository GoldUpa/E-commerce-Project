function SignUp() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Logged");    
    }
    return (
        <div className="signup-container">
            <div className="box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                    <p style={{fontSize: "0.9rem", color: "#666", marginTop: "1rem"}}>
                        Already have an account? <a href="#" style={{color: "var(--primary-color)", textDecoration: "none"}}>Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;