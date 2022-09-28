import React from "react"
import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className="container">
      <div className="wrap">
        <p className="start">START FOR FREE</p>
        <h1 className="login">Login</h1>
        <p className="notamember">
          Not a Member?{" "}
          <Link
            style={{ textDecoration: "none", color: "#8c30ff" }}
            to="/register"
          >
            Create Account
          </Link>
        </p>
        <form className="form">
          <input required type="text" placeholder="Username" />
          <input required type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <div className="checkbox">
          <label class="lebel">
            <input type="checkbox" />
            <span class="checkmark" />
            Remember for 30 days
          </label>
          <p>
            <Link
              style={{ textDecoration: "none", color: "#8c30ff" }}
              to="/register"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
        <div className="or">
          <p>Or</p>
        </div>
        <div className="auth">
          <div className="img">
            <img src="image/ContinueWithGoogle.png" alt="connect to google" />
          </div>
          <div className="img">
            <img src="image/facebook.png" alt="connect to google" />
          </div>
          <div className="img">
            <img src="image/twitter.png" alt="connect to google" />
          </div>
          <div className="img">
            <img src="image/apple.png" alt="connect to google" />
          </div>
        </div>
      </div>

      <div className="image2"></div>
    </div>
  )
}

export default Login
