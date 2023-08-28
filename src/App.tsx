import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export default function App() {
  let initTasks: Array<TaskType> = [
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ];

  /*  let arr = useState(initTasks);
  let tasks = arr[0];
  let setTasks = arr[1]; */
  let [tasks, setTasks] = useState(initTasks);

  function removeTask(id: number) {
    let filteredTasks = tasks.filter((t) => {
      return t.id !== id;
      /*   if (t.id !== id) {
        return true;
      } else {
        return false;
      } */
    });
    setTasks(filteredTasks);
  }

  /* let tasks2: Array<TaskType> = [
    { id: 1, title: 'Terminator', isDone: true },
    { id: 2, title: 'XXX', isDone: false },
    { id: 3, title: 'Jentelmens of fortune', isDone: true },
  ]; */

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} />
      {/*  <Todolist title="Movies" tasks={tasks2} /> */}
      {/* <Todolist title="Songs" /> */}
    </div>
  );
}
