import React, { useState } from "react";
import UserInfo from "./UserInfo";

function Header({isClicked,setIsClicked}){
    // const[isClicked,setIsClicked]=useState(true)
    const modeStyle={
        border:'none',
        background:"none"
    }
    
    return (
        <div className={isClicked?"headerLight":"headerDark"} >
            <button style={modeStyle} onClick={()=>setIsClicked(!isClicked)}>{isClicked?<span style={{'fontSize':"30px"}}>&#9728;</span>:<span style={{'fontSize':"35px","color":"white"}}>&#9790;</span>}</button>
            <UserInfo isClicked={isClicked}/>
        </div>
    )
}

export default Header