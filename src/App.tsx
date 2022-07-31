import React from 'react';
import {Timer} from "./components/Timer"
import './App.css';

const App: React.FC = () => {
  const [initialTime, setInitialTime] = React.useState<number | undefined>(undefined)
  const [lastSeen, setLastSeen] = React.useState<number | undefined>(undefined)


  return (
    <div className="App">
      <input type="number" className="input" placeholder='Type a time' value={initialTime} onChange={(e) => setInitialTime(Number(e.target.value))}/>
      <button className="button" onClick={() => setLastSeen(initialTime)} >Start timer</button>
      {lastSeen && <Timer lastSeen={lastSeen!}></Timer>}
    </div>
  );
}

export default App;


