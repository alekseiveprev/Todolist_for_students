import * as React from 'react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
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
  changeTaskStatus: (id: string, isDone: boolean) => void;
};

export function Todolist(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === 'Enter') {
      props.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };
  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle('');
  };
  const onAllClickHandler = () => props.changeFilter('all');
  const onActiveClickHandler = () => props.changeFilter('active');
  const onCompletedClickHandler = () => props.changeFilter('completed');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          /*  onChange={(e) => {setNewTaskTitle(e.currentTarget.value);
          }} */
          onKeyDown={onKeyDownHandler}
          /* onKeyDown={(e) => {            
            if (e.ctrlKey && e.key === 'Enter') {
              props.addTask(newTaskTitle);
              setNewTaskTitle('');
            }
          }} */
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onRemoveHandler = () => props.removeTask(t.id);
          /*   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked);
          }; */
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(t.id, newIsDoneValue);
          };

          return (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={onChangeHandler}
                /* onChange={(e) =>
                  props.changeTaskStatus(t.id, e.currentTarget.checked)
                } */
              />
              <span>{t.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          );
        })}
        {/*  {props.tasks.map((t) => (
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
        ))} */}
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  );
}
