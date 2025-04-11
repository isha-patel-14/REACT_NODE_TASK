import React from 'react';
import { useState } from 'react';
import './counter.css'
function counter() {
  const [count,setCount] = useState(0);
  const handleIncrement=()=>setCount(count+1);
  const handleDecrement=()=>setCount(count-1);
  const handleReset=()=>setCount(0);

  return (
    <div>
      <div className='counter-container'>
        <h2>Counter: {count}</h2>
        <div className='button-container'>
          <button onClick={handleIncrement} className='counter-button'>Increment</button>
          <button onClick={handleDecrement} className='counter-button'>Decrement</button>
          <button onClick={handleReset} className='counter-button'>Reset</button>
        </div>
      </div>
    </div>
  )
}
export default counter
