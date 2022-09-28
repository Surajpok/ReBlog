import React from "react"
import { Link } from "react-router-dom"
import Menu from "../components/Menu"
const Single = () => {
  return (
    <div className="single">
      <div className="contents">
        <h1>21 passive income ideas to help you make money in 2022</h1>
        <img src="/images/passive-income-ideas.webp" alt="" />
        <main className="blogmain">
          <div className="user">
            <div className="info">
              <img src="/image/surajpokhrel.jpg" alt="Suraj Pokhrel" />
              <div className="owner">
                <span>Suraj Pokrel</span>
                <p>Posted 2 Days Ago</p>
              </div>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img className="editimg" src="/image/write.png" alt="" />
              </Link>
              <Link to="">
                <img className="deleteimg" src="/image/delete.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="blog">
            <p>
              Passive income (or unearned income, as it’s classified by the
              Internal Revenue Service) is defined as income that requires
              minimal work to generate and maintain, coming from somewhere other
              than a traditional employer. Passive income streams can come from
              investing in mutual funds or real estate, selling products online,
              publishing online courses, or other side hustles in which the
              earner doesn't have to actively participate. Unlike active income,
              passive income is often generated automatically, providing
              residual income with minimal time and effort.
            </p>
            <h2>1. Make Money By Blogging</h2>
            <p>
              It can improve your personal finances and give you the freedom of
              time. Not having to trade your time for money can reduce stress
              and anxiety, and additional cash flow can make you feel more
              confident about your financial future. Whether you're a service
              provider trying to stop selling dollars for hours or a product
              business looking to add income sources that don't involve the
              logistics of sending out physical products, consider the following
              passive income ideas.
            </p>
            <p>
              It can improve your personal finances and give you the freedom of
              time. Not having to trade your time for money can reduce stress
              and anxiety, and additional cash flow can make you feel more
              confident about your financial future. Whether you're a service
              provider trying to stop selling dollars for hours or a product
              business looking to add income sources that don't involve the
              logistics of sending out physical products, consider the following
              passive income ideas.
            </p>
            <h2>2. Make Passive Income By Landing Personal Property</h2>
            <p>
              It can improve your personal finances and give you the freedom of
              time. Not having to trade your time for money can reduce stress
              and anxiety, and additional cash flow can make you feel more
              confident about your financial future. Whether you're a service
              provider trying to stop selling dollars for hours or a product
              business looking to add income sources that don't involve the
              logistics of sending out physical products, consider the following
              passive income ideas.
            </p>
          </div>
        </main>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
