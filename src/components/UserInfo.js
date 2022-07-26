import React from "react";
import icon from "../images/toastIcon.jpg"

function UserInfo({isClicked,user,isLoggedIn}){

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
                {isLoggedIn?<h3>Hello {user.firstName} <span style={{"color":"yellow","fontSize":"25px"}}>&#9787;</span><br>
                </br> Glad to have you here.<br>
                </br>Have an amazing experience as you better yourself</h3>:
                
                <h3>Hello!<br>
                </br>Welcome to Better-Self.<br>
                </br>Set-up your profile to continue</h3>}
                {}
                
            </div>
        </div>
    )
}

export default UserInfo