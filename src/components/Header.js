import React, { useState } from "react";
import UserInfo from "./UserInfo";

function Header({isClicked,setIsClicked}){
    // const[isClicked,setIsClicked]=useState(true)
    
    return (
        <div className={isClicked?"headerLight":"headerDark"} >
            <button onClick={()=>setIsClicked(!isClicked)}>{isClicked?"Light Mode":"DarkMode"}</button>
            <UserInfo isClicked={isClicked}/>
        </div>
    )
}

export default Header