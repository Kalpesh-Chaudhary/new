import React from "react"
import Hero from "./hero/Hero"
import Recent from "./recent/recent"
import Awards from "./awards/Awards"
import Location from "./location/Location"
import Featured from "./Featured/Featured"
import Team from "./team/Team"

const Home = () => {
  return (
    <>

      <Hero />
      <Featured/>
      <Recent/>
      <Awards/>
      <Location/>
       <Team/>
             
    
    </>
  )
}

export default Home
