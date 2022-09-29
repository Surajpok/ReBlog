import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "21 Passive Income Ideas To Help You Make Money In 2022",
      desc: "This is a post description and description plays a vital role in sites visibility. This is a post description and description plays a vital role in sites visibility. This is a post description and description plays a vital role in sites visibility",
      img: "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/woman-desk-camera-tablet_SOAD19042_328368_st_1560x880.jpg",
    },
    {
      id: 2,
      title: "This is post title. This is post title. This is post title.",
      desc: "This is a post description and description plays a vital role in sites visibility",
      img: "https://friendly-visvesvaraya-6bcf26.netlify.app/wp-content/uploads/2020/11/Passive-Income-Ideas-For-2021.jpg",
    },
    {
      id: 3,
      title: "This is post title. This is post title. This is post title.",
      desc: "This is a post description and description plays a vital role in sites visibility",
      img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 4,
      title: "This is post title. This is post title. This is post title.",
      desc: "This is a post description and description plays a vital role in sites visibility",
      img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ]
  return (
    <div className="menus">
      <h1>What's Teanding Now</h1>
      {posts.map((post) => (
        <div className="side" key={post.id}>
          <div className="sideimg">
            <img src={post.img} alt="" />
          </div>

          <div className="sidecontent">
            <h2>{post.title}</h2>
            <div className="buttonflex">
              <Link className="sidelink" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
              <div className="info">
                <img src="/image/surajpokhrel.jpg" alt="Suraj Pokhrel" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu
