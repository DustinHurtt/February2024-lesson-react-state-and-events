// ./src/components/Counter.jsx

import './Counter.css'

import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0)

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times!</p>

      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
    </div>
  );
}

export default Counter;
