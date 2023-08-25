import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <Todolist />
    </div>
  );
}

function Todolist() {
  return (
    <div>
      <h3> What to learn</h3>
      <div>
        <input />
        <button> + </button>
      </div>
      <ul>
        <li><input type="text" /></li>
      </ul>
    </div>
  );
}
