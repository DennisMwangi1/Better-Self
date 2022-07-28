import React from "react";

function Journal({journal,handleDeleteJournal}){
    return(
        <div className="journalItem"> 
            <p>{journal.title}</p>
            <button value={journal.id} onClick={handleDeleteJournal}>remove journal</button> 
        </div>
    )
}

export default Journal