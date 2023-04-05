

import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';

function App() 
{
  
  const [mode, setmode] = useState('light')

  const togglemode= ()=>{
    if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#36314a';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';

    }

  }

return (

<>

<Navbar title="TextEditor"  mode={mode} togglemode={togglemode} />

  <div className="container">
      <TextForm heading="Enter text Here :"  mode={mode} />
  </div>

</>
  );
}

export default App;
