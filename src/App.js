import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [Mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const togglemodeblue = () =>{
    setMode('primary');
    document.body.style.backgroundColor = 'blue' ;
  }
  const togglemodered = () =>{
    setMode('danger');
    document.body.style.backgroundColor = '#ff5d5d' ;
  }
  const togglemodegreen = () =>{
    setMode('success');
    document.body.style.backgroundColor = 'green' ;
  }
  const togglemodeyellow = () =>{
    setMode('warning');
    document.body.style.backgroundColor = 'yellow' ;
  }
 const togglemode = () =>{
    if(Mode === 'light' || Mode === 'primary' || Mode === 'danger' || Mode === 'success' || Mode === 'warning' ){
      setMode('dark');
      document.body.style.backgroundColor = '#3d3d3d' ;
      showAlert("Dark Mode Enabled","success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light Mode Enabled","success")
    }
 }
  return (
    <>
   <BrowserRouter>
   <Navbar home = "Home" mode={Mode} togglemode = {togglemode} togglemodeblue = {togglemodeblue} togglemodered = {togglemodered} togglemodegreen = {togglemodegreen} togglemodeyellow = {togglemodeyellow} />
   <Alert alert={alert}/>
   <div className="container" >
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} mode={Mode}/>} />
        <Route path="about" element={<About/>} />
      </Routes>
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
