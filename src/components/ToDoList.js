import React from "react";

function ToDoList({user}){
return(
    <div className="ToDoList">
        <h1 style={{'fontFamily':'cursive'}}>{user.firstName.toUpperCase()}'s TODO's</h1>
        <input type='textarea' placeholder="Add a ToDo....." />
        <button>Add</button>
        <div className="todos">
        <ul>
           
        </ul>
        </div>
    </div>
)
}

export default ToDoList