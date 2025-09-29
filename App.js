import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React!</h1>
        <p>This is a my first react application.</p>
        
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>

        <div className="input-section">
          <h3>What's your name?</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {name && <p>Hello, {name}! 👋</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
