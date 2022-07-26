import React from "react";
import icon from "../images/toastIcon.jpg"

function UserInfo({isClicked}){
    return(
        <div className={isClicked?'userInfo':"userInfoDark"}>
            <div className="userIcon">
                <img src={icon} alt='hello'></img>
            </div>
            <div className="user">
                <h2>Hello!<br>
                </br>Welcome to Better-Self.<br>
                </br>Set-up your profile to continue</h2>
            </div>
        </div>
    )
}

export default UserInfo