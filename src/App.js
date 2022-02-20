import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, Input } from '@mui/material';
import BirthdaysList from './components/BirthdaysList';

const d = new Date();
const month = d.getMonth(); // Month
const day = d.getDate(); // Day

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const [input, setInput] = useState({ name: '', birthday: '' });
  const filteredBirthdays = birthdays.filter(
    (birthday) =>
      birthday.birthday.includes(`${day}`) &&
      birthday.birthday.includes(`${month + 1}`)
  );

  console.log('🎂', birthdays);
  console.log('🚀', filteredBirthdays);

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
      <h1>Today´s birthday</h1>
      {filteredBirthdays.map((todayBirthday) => (
        <ul key={todayBirthday.name}>
          <li>{todayBirthday.name}</li>
          <li>{todayBirthday.birthday}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
