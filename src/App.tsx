import * as React from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export default function App() {
  let tasks1: Array<TaskType> = [
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
  ];

  let tasks2: Array<TaskType> = [
    { id: 1, title: 'Terminator', isDone: true },
    { id: 2, title: 'XXX', isDone: false },
    { id: 3, title: 'Jentelmens of fortune', isDone: true },
  ];

  return (
    <div className="App">
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
      {/* <Todolist title="Songs" /> */}
    </div>
  );
}
