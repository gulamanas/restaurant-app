import { Link } from 'react-router-dom'
import '../styles/Auth.css'

const LoginPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Login</h2>
                <form>
                    <div className="auth-input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="auth-input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <button className="auth-button" type="submit">Login</button>
                </form>

                <p className="auth-footer">
                    <Link to="/">Redirect HomeScreen</Link>
                </p>
                <p className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage