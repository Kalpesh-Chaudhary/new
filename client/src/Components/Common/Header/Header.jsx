import React, { useState } from "react"
import "./Header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom/cjs/react-router-dom"


const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>  
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
           
            
              <NavLink to="/login" className='fa fa-sign-out'>Sign up</NavLink>
            
            
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
