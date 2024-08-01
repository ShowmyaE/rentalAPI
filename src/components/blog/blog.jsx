import React from "react"
import Back from "../Common/Back"
import RecentCard from "../Home/Recent/RecentCard"
import "../Home/Recent/recent.css"
// import img from "../images/about.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog