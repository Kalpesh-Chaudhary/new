import React from "react"
import "./recent.css"
import RecentCard from "./Recentcard"
import Heading from "../../Common/Heading"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='These are the properties which is recenlty has been uploaded and it is modern properties according to new trend and variation.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
