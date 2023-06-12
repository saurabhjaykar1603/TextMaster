import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light') //wheather dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey"
      setMode('dark')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"

    }


  }
  return (
    <>
      <Navbar tital="TextMASTER" Abouttext="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze Below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
