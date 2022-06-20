import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;
    if (enteredText?.trim().length === 0) {
      // throw an error
      return;
    }
    // process the enteredText
    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todoText">What to do?</label>
      <input id="todoText" type="text" ref={todoTextRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
