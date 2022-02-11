import './App.css';
import React, { useState } from 'react';

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const [input, setInput] = useState({});
  console.log('🙂', input);
  console.log('🐕', birthdays);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const addBirthday = () => {
    setBirthdays([...birthdays, input]);
  };
  return (
    <div className="App">
      <h1>Birthday Form</h1>
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="profession"
        value={input.profession}
        onChange={handleChange}
      />

      <button onClick={addBirthday}>Add birthday</button>
    </div>
  );
}

export default App;
