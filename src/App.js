import { useState } from 'react';
import './App.css';
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextView from './components/TextView';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  
} from "react-router-dom";




function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

const showSetAlert = (message,type) =>
{
  setAlert(
    {
      msg: message,
      type: type   
    }
    
  )
  setTimeout(() => {
    setAlert(null);
  }, 1000);
}

 const toggleMode = () =>
 {
  if(mode == 'light')
  {
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
  document.body.style.color = 'white';
  showSetAlert("Dark Mode is Enabled!","danger");

 }
  else
  {
  setMode('light');
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  showSetAlert("Light Mode is Enabled!","success");
  
 }
}
  return (

    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" modem={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<TextView showSetAlert={showSetAlert} heading="Enter Paragraph Here!" modem={mode}/>}/>
    
      <Route path='/aboutus' element={<Aboutus modem={mode}/>}/>
     
     
     
     </Routes>
     </Router>
     </>
  );
}

export default App;
