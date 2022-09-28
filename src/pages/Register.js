import React from "react"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="container">
      <div className="wrap">
        <p className="start">START FOR FREE</p>
        <h1 className="login">Sign Up</h1>
        <p className="notamember">
          Already a Member?{" "}
          <Link
            style={{ textDecoration: "none", color: "#8c30ff" }}
            to="/login"
          >
            Login
          </Link>
        </p>
        <form className="form">
          <input required type="text" placeholder="Username" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
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

export default Register
