import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import React,{useState} from 'react';
import ToDoList from './ToDoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Journal from './Journal';
import Profile from './Profile';


function App() {
 const[isLoggedIn,setIsLoggedIn]=useState(false)
 const[userFirstName,setUserFirstName]=useState('')
 const[userLastName,setUserLastName]= useState('')
 const[userBio,setUserBio]=useState('')
 const[user,setUser]=useState({})


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
 
  const[isClicked,setIsClicked]=useState(true)
  return (
    <div className='app'>
     
      <Header isClicked={isClicked} setIsClicked={setIsClicked} user={user} isLoggedIn={isLoggedIn}/>
     <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn} />
     <Routes>

      <Route path='/todo' element={<ToDoList user={user}/>}/>

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



