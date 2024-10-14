import React from "react";


const Login = () => {
  return (
    <div className="login-page">
      
      <div className="image-container">
        <img
          src="https://cdn.dribbble.com/users/3578981/screenshots/16111574/media/b019c137211f2cb5f89916d67c28d018.jpg?resize=1000x750&vertical=center"
          alt="Login illustration"
        />
      </div>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form id="loginForm">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="social-login">
              <p>Or sign in with:</p>
              <button id="googleSignIn" className="google-btn">
                Google
              </button>
            </div>
            <div className="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
