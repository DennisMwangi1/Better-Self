import React,{useEffect} from "react"
import { NavLink } from "react-router-dom";
import {Navigate} from 'react-router-dom'

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
  
  function NavBar({isLoggedIn}){
    
    return(
    <div className='navbar'>
      {isLoggedIn?<NavLink to='/todo' exact="true" style={linkStyles}>ToDo</NavLink>:''}
      {isLoggedIn?<NavLink to='/journal' exact ='true' style={linkStyles} >MyJournal</NavLink>:''}
      {isLoggedIn?'':<NavLink  to='/'  style={linkStyles} >Profile</NavLink>}
    
      
      
  
    </div>
    )
  }

  export default NavBar