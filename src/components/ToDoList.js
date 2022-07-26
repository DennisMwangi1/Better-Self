import React from "react";

function ToDoList(){
return(
    <div className="ToDoList">
        <h1 style={{'fontFamily':'cursive'}}>TODO</h1>
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