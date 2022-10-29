import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-menus'>
          <Link to="/" style={{textDecoration: 'none', color:'black'}}> HOME </Link>
          <Link to="/manageprojects" style={{textDecoration: 'none', color:'black'}}> MANAGE PROJECTS </Link>
          <Link to="/eventcalendar" style={{textDecoration: 'none', color:'black'}}> EVENT CALENDAR </Link>
          <Link to="/projectsummary" style={{textDecoration: 'none', color:'black'}}> PROJECT SUMMARY </Link>
          <Link to="/login" style={{textDecoration: 'none', color:'black'}}> LOGOUT </Link>
        </div>
    </div>
  )
}

export default Navbar