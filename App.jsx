import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const displayName = name.trim();

  const handleIncrement = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const handleDecrement = () => {
    setCount((currentCount) => Math.max(0, currentCount - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  const counterMessage =
    count === 0
      ? 'Start counting with the + button.'
      : `You've clicked ${count} time${count === 1 ? '' : 's'}.`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my React app!</h1>
        <p>A simple playground with a counter and a personalized greeting.</p>

        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <p className="counter-hint">{counterMessage}</p>
          <div className="button-group">
            <button onClick={handleIncrement} aria-label="Increase counter">
              +
            </button>
            <button
              onClick={handleDecrement}
              disabled={count === 0}
              aria-label="Decrease counter"
            >
              -
            </button>
            <button onClick={handleReset} disabled={count === 0}>
              Reset
            </button>
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
          {displayName && <p>Hello, {displayName}! 👋</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
