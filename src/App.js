import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, Input } from '@mui/material';
import BirthdaysList from './components/BirthdaysList';

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
    setInput({ name: '', birthday: '' }); //Clear up input after clicking add birthday button
  };

  return (
    <div className="App">
      <form>
        <h1>Birthday Reminder</h1>
        <FormControl>
          <Input
            type="text"
            placeholder="add name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <Input
            type="date"
            name="birthday"
            value={input.birthday}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          disabled={!input.name || !input.birthday}
          type="submit"
          onClick={addBirthday}
          variant="contained"
          color="primary"
        >
          Add birthday
        </Button>
      </form>

      {birthdays.map((birthday) => (
        <BirthdaysList birthday={birthday} key={birthday.name} />
      ))}
    </div>
  );
}

export default App;
