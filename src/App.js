import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';
import { useState } from 'react';

function App() {

  let countState = useState(0);

  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
