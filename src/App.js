
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';



function App() {


  const removebodycls=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const toggleModee = (cls) => {
    removebodycls();
    document.body.classList.add('bg-'+cls)
  }
  const toggleMode=()=>{
    if (mode === 'dark') {
      setMode('light')
      document.body.style.textcolor = 'red';
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode is enable", "success");
      document.title = 'TextUtil'

    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#102436';
      showalert("Dark Mode is enable", "success");
      document.title = 'TextUtil-DarkMode'
    }
  }
  const showalert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  return (
    <>
      <Router>
        <Navbar title="Manya" about="I am About" mode={mode} toggleMode={toggleMode} toggleModee={toggleModee} removee={removebodycls}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analysis below" alert={showalert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
