import * as React from 'react';
import { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export type FilterValuesType = 'all' | 'completed' | 'active';

export default function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: 'CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
  ]);

  console.log(tasks);

  let [filter, setFilter] = useState<FilterValuesType>('all');

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => {
      return t.id !== id;
    });
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === 'active') {
    tasksForTodolist = tasks.filter((t) => t.isDone === false);
  }

  /* let tasks2: Array<TaskType> = [
    { id: 1, title: 'Terminator', isDone: true },
    { id: 2, title: 'XXX', isDone: false },
    { id: 3, title: 'Jentelmens of fortune', isDone: true },
  ]; */

  function changeTaskStatus(id: string, isDone: boolean) {
    let task = tasks.find((t) => t.id === id);
    if (task) {
      task.isDone === isDone;
      setTasks([...tasks]);
    }
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
      />
      {/*  <Todolist title="Movies" tasks={tasks2} /> */}
      {/* <Todolist title="Songs" /> */}
    </div>
  );
}
