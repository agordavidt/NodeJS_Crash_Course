import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { Register } from './register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  return (
    <div className="App">
      {
        currentForm == "Login" ? <login /> : <register />
      }
      <Login />
    </div>
  );
}

export default App;
