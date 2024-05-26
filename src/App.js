import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsRow from './components/NewsRow';
import React, {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState("light")
  const [style, setStyle] = useState({color: "black", backgroundColor: "white"})
  const [darkString, setDarkString] = useState("Enable Dark Mode")

  const handleDarkMode = () => {
    if(darkMode == "light") {
      setStyle({color: "white", backgroundColor: "black"})
      setDarkMode("dark")
      setDarkString("Disable Dark Mode")
    }

    else {
      setStyle({color: "black", backgroundColor: "white"})
      setDarkMode("light")
      setDarkString("Enable Dark Mode")
    }
    
  }

  return (
    <div style={style}>
      <NavBar title="NewsMonkey" style={style} darkMode={darkMode}/>
      <div className='container'>
      <div className='pt-3'></div>
      <h2>News Monkey - Aapka news ka daily partner.</h2>
      <div className='pt-3'></div>
      <NewsRow style={style}/>
      <div className='pt-3'></div>
      <center><button type="button" onClick={handleDarkMode} class="btn btn-primary">{darkString}</button></center>
      <div className='pt-3'></div>
      </div>
    </div>
  );
}

export default App;
