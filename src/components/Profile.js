import React from "react";

function Profile(){
    return (
        <div className="profile">
            <form className="profileForm">
               <p>First Name</p> <input type='text'/><br></br>
               <p>Last Name</p> <input type='text'/><br></br>
               <p>About Yourself</p><textarea type='text' /><br></br>
                <input className="formSub" type='submit'/>
            </form>
        </div>
    )
}

export default Profile