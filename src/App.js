import './App.css';
import React, { useState } from 'react';

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const [input, setInput] = useState({ name: '', birthday: '' });
  console.log('🙂', input);
  console.log('🐕', birthdays);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const addBirthday = (event) => {
    event.preventDefault();
    setBirthdays([...birthdays, input]);
    setInput({ name: '', birthday: '' });
  };

  return (
    <div className="App">
      <h1>Birthday Form</h1>
      <form>
        <input
          type="text"
          placeholder="add name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthday"
          value={input.birthday}
          onChange={handleChange}
        />
        <button type="submit" onClick={addBirthday}>
          Add birthday
        </button>
      </form>
    </div>
  );
}

export default App;
