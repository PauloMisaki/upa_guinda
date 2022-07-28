import React, { useState, useEffect } from 'react';
import Header from './src/Header';
import Guinda from './src/Guinda';
import './App.css';

function App() {
  const [user, setUser] = useState('Visitante');
  const [userInput, setUserInput] = useState('');
  const [disabled, setDisabled] = useState(true);
  
    const handleUserChange = ({ target }) => {
      if (target.name === 'username') {
        setUserInput(target.value)
      } if (target.name === 'usernameBtn') {
        setUser(userInput);
        setUserInput('');
      }
    }

  useEffect(() => {
    if (userInput.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userInput])

  return (
    <div className="App">
      <Header user={user} />
      <label htmlFor='username'>Nickname:{' '} 
      <input type='text' name='username' value={userInput} onChange={handleUserChange} placeholder="Min. 3 caracteres"/>
      </label>
      <button name='usernameBtn' onClick={handleUserChange} disabled={disabled}>Confirmar</button>
      <Guinda user={user} />
    </div>
  );
}

export default App;
