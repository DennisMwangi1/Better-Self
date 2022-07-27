import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import React,{useEffect, useState} from 'react';
import ToDoList from './ToDoList';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import NavBar from './Navbar';
import Journal from './Journal';
import Profile from './Profile';


function App() {
 const[isLoggedIn,setIsLoggedIn]=useState(false)
 const[isClicked,setIsClicked]=useState(true)
 const[userFirstName,setUserFirstName]=useState('')
 const[userLastName,setUserLastName]= useState('')
 const[userBio,setUserBio]=useState('')
 const[user,setUser]=useState({})
 const[ToDo,setToDo]=useState('')
 const[ToDos,setAddToDos]=useState([])
//  const[DisplayToDos,setDisplayToDos] = useState(Todo)

 useEffect(()=>{
  fetch('http://localhost:3000/todos')
  .then((res)=>res.json())
  .then((items)=>{
    setAddToDos(items)
    
  })
 },[])
//  console.log(ToDos)


 function handleFirstName(e){
  setUserFirstName(e.target.value)
 }

 function handleLastName(e){
  setUserLastName(e.target.value)
 }

 function handleBio(e){
  setUserBio(e.target.value)
 }
 
 function handleSubmit(e){
  e.preventDefault()
 const userData={
  firstName:userFirstName,
  lastName:userLastName,
  About:userBio
 }
 setUser(userData)
 setIsLoggedIn(true)
 
 }
 function ToDoItem(e){
  setToDo(e.target.value)
 }
 function handleToDos(e){
  // console.log('hello')
  const newToDo = {
    title:ToDo
  }
  fetch('http://localhost:3000/todos',{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(newToDo)
  })
  setAddToDos([...ToDos,newToDo])
 }

 function handleDeleteToDo(e){
  fetch(`http://localhost:3000/todos/${e.target.value}`,{
    method:"DELETE"
  })
  .then((res)=>res.json())
  .then()

  e.target.parentNode.remove()
 }


  return (
    <div className='app'>
     
      <Header isClicked={isClicked} setIsClicked={setIsClicked} user={user} isLoggedIn={isLoggedIn}/>
     <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} />
     <Routes>

      <Route path='/todo' element={<ToDoList
       user={user}
       ToDoItem={ToDoItem}
       handleToDos={handleToDos}
       ToDos={ToDos}
       handleDeleteToDo={handleDeleteToDo}
       />}/>

      <Route path='/journal' element={<Journal user={user}/>}/>

      <Route path='/' element={<Profile
      handleFirstName={handleFirstName}
      handleLastName={handleLastName}
      handleBio={handleBio}
      handleSubmit={handleSubmit}
      />}/>

      <Route path="*"  element={<h1 style={{"backgroundColor":"aliceblue"}}>Page not Found</h1>}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;



