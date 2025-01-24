import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import {FaGoogle, FaMicrosoft, FaTwitter, FaEye, FaEyeSlash} from 'react-icons/fa'

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${email}`);
    navigate("/")
  };

  const handleSocialLogin = (platform) => {
    alert(`Logged in with ${platform}`)
    navigate("/")
  };

  const handleForgotPassword = () => {
    navigate ("/reset-password")
  };

  return(
    <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleLogin} className='login-form'>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                id='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your Username or Email'
                required
                />
            </div>
            <div className='form-group password-group'>
                <label htmlFor="password">Password:</label>
                <div className="password-wrapper">
                    <input 
                    type={showPassword ? "text" : "password"}
                    id='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Enter your Password'
                    required 
                    />
                    <span
                    className='password-toggle'
                    onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye/> }
                    </span>
                </div>
            </div>
            <div>
                <button type='submit' className='login-button'>
                    Login
                </button>
            </div>
        </form>

        <div className="social-login">
            <p>or Login with:</p>
            <div className="social-icons">
                <button className='social-icon google'
                onClick={()=>handleSocialLogin("Google")}>
                    <FaGoogle/>
                </button>
                <button className='social-icon microsoft'
                onClick={()=>handleSocialLogin("Microsoft")}>
                    <FaMicrosoft/>
                </button>
                <button className='social-icon twitter'
                onClick={()=>handleSocialLogin("Twitter")}>
                    <FaTwitter/>
                </button>
            </div>
        </div>
        <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password
        </p>
    </div>
  )
}

export default Login;
