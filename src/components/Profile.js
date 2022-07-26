import React from "react";

function Profile({handleFirstName,handleLastName,handleBio,handleSubmit}){
    return (
        <div className="profile">
            <form className="profileForm" onSubmit={handleSubmit} >
               <p>First Name</p> <input onChange={handleFirstName} type='text'required /><br></br>
               <p>Last Name</p> <input onChange={handleLastName} type='text' required/><br></br>
               <p>About Yourself</p><textarea onChange={handleBio} type='text' required /><br></br>
                <input className="formSub" type='submit'/>
            </form>
        </div>
    )
}

export default Profile