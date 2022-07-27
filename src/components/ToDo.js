import React from "react";

function ToDo({Todo,handleDeleteToDo}){

    

    return(
        <div className="todo">
            <span>&#10146; </span>
            <h3>{Todo.title}</h3>
            <button onClick={handleDeleteToDo} value={Todo.id}>Remove</button>
        </div>
    )
}

export default ToDo