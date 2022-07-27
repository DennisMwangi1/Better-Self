import React from "react";
import ToDo from "./ToDo";

function ToDoList({user,ToDoItem,handleToDos,ToDos,handleDeleteToDo}){

return(
    <div className="ToDoList">
        <h1 style={{'fontFamily':'cursive'}}>{user.firstName}'s TODO's</h1>
        <input onChange={ToDoItem} type='textarea' placeholder="Add a ToDo....." />
        <button onClick={handleToDos}>Add</button>
        <div className="todos">
        <ul>
           {ToDos.map((Todo,index)=><ToDo key={index} Todo={Todo}/>)}
        </ul>
        </div>
    </div>
)
}

export default ToDoList