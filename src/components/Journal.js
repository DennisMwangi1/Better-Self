import React from "react";

function Journal({user}){
    
    const userName =()=>{
        if(user === ''){
            return false
        }else{
            return user.firstName
        }
    }

    const modeStyle={
        border:'none',
        background:"none",
        cursor:"pointer"
    }
    return (
        <div className="journal">
        <h1 style={{'fontFamily':'cursive'}}>{userName()}'s  Journal</h1>
        <textarea type='textarea' placeholder="Journal away....." />
        <button style={modeStyle}><span style={{"fontSize":"30px"}}>&#9993;</span></button>
        <div className="todos">
        <ul>
           {/* <span style={{"fontSize":"40px"}}>&#9997;</span> */}
        </ul>
        </div>
    </div>
    )
}

export default Journal