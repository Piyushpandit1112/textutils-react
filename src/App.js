// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')
  const [buttonText, setbuttonText] = useState('Enable Dark Mode')
  const [alert, setalert] = useState(null)
  // const [buttonTextMode, setbuttonTextMode] = useState('dark')

  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }

  const toggleMode = () =>{
    if (mode==='dark')
    {
      setMode('light');
      setbuttonText('Enable Dark Mode');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title='TextUtils is amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils';
      // }, 1500);
      // document.body.style.color='black'
      // setbuttonTextMode('dark')
    }
    else{
      setMode('dark');
      setbuttonText('Enable Light Mode');
      document.body.style.backgroundColor='#1f3138';
      showAlert("Dark mode has been enabled","success");
      // document.body.style.color='white'
      // setbuttonTextMode('light')
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} buttonText={buttonText} /> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} buttonText={buttonText} />

    <Alert alert={alert}/>
    <div className="container my-3">

    {/* To use render the web pages we have used the routes  */}
    {/* <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route>
    </Routes> */}
{/*  */}
        
      <TextForm heading="Enter the text to analyze below" mode={mode}  showAlert={showAlert} />
      {/* <About/> */}
    </div>
    {/* </Router> */}
    </>

  );
}

export default App;
