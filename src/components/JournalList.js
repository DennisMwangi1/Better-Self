import React from "react";
import Journal from "./Journal";

function JournalList({user,journals,JournalItem,handleAddJournal,handleDeleteJournal}){
    
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
        <h1 style={{'fontFamily':'cursive','color':'rgb(32, 53, 71)'}}>{userName()}'s  Journal</h1>
        <textarea onChange={JournalItem} type='textarea' placeholder="Journal away....." />
        <button onClick={handleAddJournal} style={modeStyle}><span style={{"fontSize":"30px"}}>&#9993;</span></button>
        <div className="todos">
        <ul>
           {journals.map((journal,index)=><Journal key={index} journal={journal} handleDeleteJournal={handleDeleteJournal} /> )}
        </ul>
        </div>
    </div>
    )
}

export default JournalList