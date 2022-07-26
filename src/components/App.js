import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import React,{useState} from 'react';
import ToDoList from './ToDoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';


function App() {

  const[isClicked,setIsClicked]=useState(true)
  return (
    <div className='app'>
     
      <Header isClicked={isClicked} setIsClicked={setIsClicked}/>
     <BrowserRouter>
      <NavBar />
     <Routes>
      {/* <NavSection/> */}
      <Route path='/' element={<ToDoList/>}/>
      {/* <Route  path ="/" element={<Header isClicked={isClicked} setIsClicked={setIsClicked}/>}/> */}
      {/* <Route path="*"  element={<h1 style={{"backgroundColor":"aliceblue"}}>Page not Found</h1>}/> */}
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;



