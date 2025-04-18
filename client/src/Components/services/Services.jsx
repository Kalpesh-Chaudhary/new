import React from "react"
import img from "../images/services.jpg"
import "../Home/Featured/Featured.css"
import Back from "../Common/back"
import FeaturedCard from "../Home/Featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
