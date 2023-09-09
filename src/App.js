import { useState } from 'react';
import './App.css';
import ListNotes from './components/ListNotes';

function App() {
  const [notes, setNotes] = useState(["do laundry"]);

  return (
    <div className="App">
      <h1>Having fun with testing!</h1>
      <h3>Yet another todo app :P</h3>
      <ListNotes notes={notes} />
    </div>
  );
}

export default App;
