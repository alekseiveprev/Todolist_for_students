import * as React from 'react';
import { useState } from 'react';
import { FilterValuesType } from './App';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  /* removeTask: Function; */
  changeFilter: (value: FilterValuesType) => void;
  /* changeFilter: Function; */
  addTask: (title: string) => void;
};

export function Todolist(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState(' ');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={(e) => {
            setNewTaskTitle(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            // debugger;
            if (e.ctrlKey && e.key === 'Enter') {
              props.addTask(newTaskTitle);
              setNewTaskTitle('');
            }
          }}
        />
        <button
          onClick={() => {
            props.addTask(newTaskTitle);
            setNewTaskTitle('');
          }}
        >
          {' '}
          +{' '}
        </button>
      </div>
      <ul>
        {props.tasks.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button
              onClick={() => {
                props.removeTask(t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
        {/* another way of writing */}
        {/*      {props.tasks.map((t) => {
          return (
            <li>
              <input type="checkbox" checked={t.isDone} />
              <span> {t.title}</span>
            </li>
          );
        })} */}
        {/*  <li>
          <input type="checkbox" checked={props.tasks[0].isDone} />
          <span> {props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[1].isDone} />
          <span>{props.tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[2].isDone} />
          <span>{props.tasks[2].title}</span>
        </li> */}
      </ul>
      <div>
        <button
          onClick={() => {
            props.changeFilter('all');
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            props.changeFilter('active');
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            props.changeFilter('completed');
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
