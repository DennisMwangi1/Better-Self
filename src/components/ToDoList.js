import React from "react";
import ToDo from "./ToDo";

function ToDoList({user}){
return(
    <div className="ToDoList">
        <h1 style={{'fontFamily':'cursive'}}>{user.firstName}'s TODO's</h1>
        <input type='textarea' placeholder="Add a ToDo....." />
        <button>Add</button>
        <div className="todos">
        <ul>
           <ToDo />
        </ul>
        </div>
    </div>
)
}

export default ToDoList