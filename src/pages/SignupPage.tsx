import { Link } from 'react-router-dom'
import '../styles/Auth.css'


const SignupPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Sign Up</h2>
                <form>
                    <div className="auth-input-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                    <div className="auth-input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="auth-input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <button className="auth-button" type="submit">Sign Up</button>
                </form>
                <p className="auth-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default SignupPage