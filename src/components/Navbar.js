import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-menus'>
          <Link to="/" style={{textDecoration: 'none', color:'black'}}> HOME </Link>
          <Link to="/managetasks" style={{textDecoration: 'none', color:'black'}}> MANAGE TASKS </Link>
          <Link to="/eventcalendar" style={{textDecoration: 'none', color:'black'}}> EVENT CALENDAR </Link>
          <Link to="/tasksummary" style={{textDecoration: 'none', color:'black'}}> TASK SUMMARY </Link>
          <Link to="/login" style={{textDecoration: 'none', color:'black'}}> LOGOUT </Link>
        </div>
    </div>
  )
}

export default Navbar