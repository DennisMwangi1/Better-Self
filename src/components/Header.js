import React, { useState } from "react";
import UserInfo from "./UserInfo";

function Header({isClicked,setIsClicked,user,isLoggedIn}){
    // const[isClicked,setIsClicked]=useState(true)
    const modeStyle={
        border:'none',
        background:"none"
    }
    
    return (
        <div className={isClicked?"headerLight":"headerDark"} >
            <button style={modeStyle} onClick={()=>setIsClicked(!isClicked)}>{isClicked?<span style={{'fontSize':"30px"}}>&#9728;</span>:<span style={{'fontSize':"35px","color":"white"}}>&#9790;</span>}</button>
            <UserInfo isClicked={isClicked} user={user} isLoggedIn={isLoggedIn}/>
        </div>
    )
}

export default Header