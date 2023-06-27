import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [mode, setMode] = useState('light') //wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);

  }

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "grey"
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")


    }


  }
  return (
    <>
      <Navbar tital="TextMASTER" Abouttext="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
