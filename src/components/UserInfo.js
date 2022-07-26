import React from "react";
import icon from "../images/toastIcon.jpg"

function UserInfo({isClicked}){

    const nameStyle ={
        fontFamily:'cursive',
        fontSize:'35px',
        // color:'white'
    }
    return(
        <div className={isClicked?'userInfo':"userInfoDark"}>
            <div className="userIcon">
                {/* <img src={icon} alt='hello'></img> */}
                <h2 style={nameStyle}>Better-Self</h2>
            </div>
            <div className="user">
                {<h3>Hello!<br>
                </br>Welcome to Better-Self.<br>
                </br>Set-up your profile to continue</h3>}
                
            </div>
        </div>
    )
}

export default UserInfo