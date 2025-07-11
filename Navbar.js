import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Atharv Yadav</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="menu_active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="menu_active" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="menu_active" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="menu_active" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
