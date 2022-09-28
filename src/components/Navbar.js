import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <header>
      <nav className="navheader">
        <div id="logo">
          <Link to="/">
            <img
              src="/image/Psuraj.svg"
              alt="PSuraj | Digital Tool Website"
              height={50}
              width={150}
            />
          </Link>
        </div>

        <label for="drop" class="toggle">
          MENU
        </label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <label for="drop-1" class="toggle">
              TOOLS +
            </label>
            <Link to="#">TOOLS +</Link>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <Link to="/calculator/share-calculator">SHARE CALCULATOR</Link>
              </li>
              <li>
                <Link to="/calculator/age-calculator">AGE CALCULATOR</Link>
              </li>
              <li>
                <Link to="/broker-list">STOCK BROKER LIST</Link>
              </li>
            </ul>
          </li>
          <li>
            <label for="drop-2" class="toggle">
              BLOG +
            </label>
            <Link to="#">BLOG +</Link>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <Link to="/blog/make-money-blogging">MAKE MONEY BLOGGING</Link>
              </li>
              <li>
                <label for="drop-3" class="toggle">
                  Tutorials +
                </label>
                <Link href="#">TUTORIALS +</Link>
                <input type="checkbox" id="drop-3" />

                <ul>
                  <li>
                    <Link href="#">HTML/CSS</Link>
                  </li>
                  <li>
                    <Link href="#">jQuery</Link>
                  </li>
                  <li>
                    <Link href="#">Other</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/page/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/page/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/page/privacy">PRIVACY</Link>
          </li>
          <li>
            <label for="drop-2" class="toggle">
              <Link to="/">
                <img className="avatar" alt="" src="/image/surajpokhrel.jpg" />
              </Link>
            </label>
            <Link to="#">
              <img className="avatar" alt="" src="/image/surajpokhrel.jpg" />
            </Link>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <Link to="/register">SIGN UP</Link>
              </li>
              
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/logout">LOGOUT</Link>
              </li>
              </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
