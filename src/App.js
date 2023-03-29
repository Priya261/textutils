import './App.css';
//import React from 'react'; 
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link 
} 
from 'react-router-dom';  

import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About.js'


function App() {


//   function countWords(text){
//     let wc = text.split(" ").length;
//     text.split(" ").forEach((word) => {
//         if(!word.length){
//             wc -= 1;  
//         }
//     });

//     return wc;
// }





  // state for alert variable
  const [alert,setAlert]=useState(null);
  
  const showAlert= (message,type)=>
  {
    setAlert({

       msg:message,
       type:type

    })

    setTimeout(()=>{

      setAlert(null);

    },3000);
  } 


  //state for mode variable
  
 const [mode,setMode]=useState('light');
  //if(mode=='dark')
 // setMode('Enable dark mode');
  // else{
  //   setMode('Enable light mode');
  // }
const removeClass=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
  

}
  const toggleMode=(cls)=>{

    //setMode('Enable light mode');
    removeClass();
   document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode('dark')
       document.body.style.backgroundColor = '#042743';
       showAlert("dark mode has enabled","success");
       document.title = 'TextUtils-DarkMode'
      //  setTimeout(() => {
        
      //   document.title ="wow! You are using TextUtils"  
      //  }, 1000);  
    }else{
      setMode('light') 
       document.body.style.backgroundColor = 'white';
       showAlert("light mode has enabled","success");
       document.title = 'TextUtils-LightMode'
    }
 
  }

  return (
    <>
      <Router>
      <Navbar
            title="testUtils"
            link="About us"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
        <div className="container my-3">
          
          
          {/* <Navbar title= {3} link="about us"/> */}
          {/* <Navbar/>  */}

          {/* <About/> */}
      

        <Routes>
          <Route exact path="/about"
           element={<About/>}>
          </Route>
          <Route exact path="/"
           element={<TextForm heading="Enter Your Question" showAlert={showAlert}/>}> 
          </Route>
        </Routes>
        </div>
      </Router>
    </>
  );  
}
export default App;
 