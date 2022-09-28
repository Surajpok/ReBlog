import React from "react"
import { Link } from "react-router-dom"
function Home() {
  const posts = [
    {
      id: 1,
      title:
        "This is post title. This is post title. This is post title",
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
    <>
      <main className="main">
        <div className="mainbellow">
          <center>
            <h1 className="herotitle">
              Providing You Information's And Tools You Need
            </h1>
            <p className="pagecontent">
              Tools such as Share calculator, Nepali age calculator, EMI
              calculator & Nepali Calender.
            </p>
          </center>
          <div className="herocontainer">
            <div className="hero">
              <div className="herotile">
                <div className="herolink">
                  <Link href="/calculator/share-calculator">
                    <div className="tools">
                      <img
                        src="/image/sharecalculator.svg"
                        height={100}
                        width={100}
                        alt="Share Calculator"
                      />
                      <span className="tooltitle">SHARE CALCULATOR</span>
                    </div>
                  </Link>
                </div>

                <div className="herolink">
                  <Link href="/calculator/age-calculator">
                    <div className="tools">
                      <img
                        src="/image/age.svg"
                        height={100}
                        width={100}
                        alt="Age Calculator"
                      />
                      <span className="tooltitle">AGE CALCULATOR</span>
                    </div>
                  </Link>
                </div>

                <div className="herolink">
                  <Link href="/calculator/share-calculator">
                    <div className="tools">
                      <img
                        src="/image/roi.svg"
                        height={100}
                        width={100}
                        alt="EMI Calculator"
                      />
                      <span className="tooltitle">EMI CALCULATOR</span>
                    </div>
                  </Link>
                </div>

                <div className="herolink">
                  <Link href="/calculator/share-calculator">
                    <div className="tools">
                      <img
                        src="/image/calender.svg"
                        height={100}
                        width={100}
                        alt="EMI Calculator"
                      />
                      <span className="tooltitle">NEPALI CALENDER</span>
                    </div>
                  </Link>
                </div>

                <div className="herolink">
                  <Link href="/calculator/share-calculator">
                    <div className="tools">
                      <img
                        src="/image/gpa.svg"
                        height={100}
                        width={100}
                        alt="Share Calculator"
                      />
                      <span className="tooltitle">GPA CALCULATOR</span>
                    </div>
                  </Link>
                </div>

                <div className="herolink">
                  <Link href="/calculator/share-calculator">
                    <div className="tools">
                      <img
                        src="/image/callorie.svg"
                        height={100}
                        width={100}
                        alt="Calorie Calculator"
                      />
                      <span className="tooltitle">CALORIE CALCULATOR</span>
                    </div>
                  </Link>
                </div>

                <div className="herolink">
                  <Link href="/calculator/share-calculator">
                    <div className="tools">
                      <img
                        src="/image/compound.svg"
                        height={100}
                        width={100}
                        alt="compound interest calculator"
                      />
                      <span className="tooltitle">COMPOUND INTEREST</span>
                    </div>
                  </Link>
                </div>

                <div className="herolink">
                  <Link href="/calculator/share-calculator">
                    <div className="tools">
                      <img
                        src="/image/emi.svg"
                        height={100}
                        width={100}
                        alt="Share Calculator"
                      />
                      <span className="tooltitle">ROI CALCULATOR</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="home">
        <div className="posts">
        {/* <h1><center>Popular Post</center></h1> */}
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>

              <div className="content">
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <Link className="link" to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
