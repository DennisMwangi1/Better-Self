import React from "react"
import { NavLink } from "react-router-dom";

const linkStyles ={
    display: "inline-block",
    width: "67px",
    padding: "12px",
    margin: "0px 70px 0px 70px",
    background: "rgba(84, 129, 169, 0.737)",
    textDecoration: "none",
    color: "white",
    border:"none",
    textAlign:"center",
    bordeRadius:"10px"
    
  }
  
  function NavBar(){
    return(
    <div className='navbar'>
      <NavLink to='/todo' exact="true" style={linkStyles}>ToDo</NavLink>
      <NavLink to='/journal' exact ='true' style={linkStyles} >MyJournal</NavLink>
      <NavLink to='/'  style={linkStyles} >Profile</NavLink>
  
    </div>
    )
  }

  export default NavBar