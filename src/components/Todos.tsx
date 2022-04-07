import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((ele) => (
        <TodoItem
          key={ele.id}
          todoText={ele.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, ele.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
