import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { Register } from './register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "Login" ? <login onFormSwitch={toggleForm} /> : <register onFormSwitch={toggleForm}/>
      }
      <Login />
    </div>
  );
}

export default App;
