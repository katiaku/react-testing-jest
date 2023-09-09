import { useState } from 'react';
import './App.css';
import ListNotes from './components/ListNotes';
import InputNewNote from './components/InputNewNote';

function App() {
  const [notes, setNotes] = useState(["do laundry"]);

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  return (
    <div className="App">
      <h1>Having fun with testing!</h1>
      <h3>Yet another todo app :P</h3>
      <InputNewNote addNewNote={addNewNote} />
      <ListNotes notes={notes} />
    </div>
  );
}

export default App;
