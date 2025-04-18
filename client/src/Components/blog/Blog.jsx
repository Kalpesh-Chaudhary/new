import React from "react"
import "../Home/recent/recent.css"
import img from "../images/about.jpg"
import Back from "../Common/back"
import RecentCard from "../Home/recent/Recentcard"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
